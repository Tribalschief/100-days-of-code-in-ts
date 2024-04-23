import inquirer from "inquirer";
import fs from "fs-extra";
import { loadEnvFile } from "process";

interface Note {
  title: string;
  body: string;
}

const notesFilePath = './notes.json';

async function loadNotes(): Promise<Note[]>{
  try {
    return await fs.readJson(notesFilePath);
  } catch(err){
    return []
  }
}

async function saveNotes(notes: Note[]): Promise<void>{
  await fs.writeJson(notesFilePath, notes)
}

async function displayMenu():Promise<void>{
  const answer = await inquirer.prompt({
    type:'list',
    name:'list',
    message:'What would you like to do?',
    choices:["Create Note","View Notes","Update Note List","Delete Note"]
  });
  switch(answer.action){
    case 'Create note':
          await createNote();
          break;
    case 'View Notes':
          await viewNotes();
          break;
    case 'Update Note':
          await updateNotes();
          break;
    case 'Delete Note':
          await deleteNote();
          break;
    case 'Exit':
          process.exit()
  }
}

async function createNote():Promise<void>{
  const answer = await inquirer.prompt([
    {
      type:'input',
      name:"title",
      message:'Note title',
    },
    {
      type:'input',
      name:'body',
      message:'Note Content',
    }
  ])
  const notes = await loadNotes();
  notes.push({title:answer.title, body:answer.body});
  await saveNotes(notes);
  console.log('note created');
  await displayMenu();
}

async function viewNotes(): Promise<void>{
  const notes = await loadNotes();
  notes.forEach((note:any,index:number)=>{
    console.log(`${index+1}. ${note.title}`)
    console.log(note.body);
  })
  await displayMenu();
}

async function updateNotes():Promise<void>{
  const notes = await loadNotes();
  const choices = notes.map((notes:any,index:number)=>{`${index+1}. ${notes.title}`});

  const noteToEdit = await inquirer.prompt([{
    type:'list',
    name:'note',
    message:'Which note would you like to edit?',
    choices
  }])
  const noteIndex = parseInt(noteToEdit.selectedNote.split(':')[0],10) - 1;
  const updateNotes = await inquirer.prompt([{
    type:'input',
    name:'title',
    message:'New Title',
    default: notes[noteIndex].title
  },{
    type:'input',
    name:'body',
    message:'New Content:',
    default: notes[noteIndex].body
  }
]);
notes[noteIndex] = updateNotes;
await saveNotes(notes);
console.log('Note Updated');
await displayMenu();
}

async function deleteNote():Promise<void>{
  const notes = await loadNotes();
  const choices = notes.map((note:any,index:number)=> `${index +1}: ${note.title}`);
  const noteToDelete = await inquirer.prompt([{
    type:'list',
    name:'selectedNote',
    message:'which note would you like to delete?',
    choices
  }])
  const noteIndex = parseInt(noteToDelete.selectedNote.split(':')[0], 10) - 1;
  notes.splice(noteIndex, 1);
  await saveNotes(notes);
  console.log('Note Deleted')
  await displayMenu()
}
displayMenu()