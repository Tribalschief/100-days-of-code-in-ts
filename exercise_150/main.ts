import inquirer from "inquirer";
import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig.js";

interface Workout {
  id:string;
  type:string;
  duration:number;
  intensity:string;
  date:string;
}

interface Goal {
  target:string;
  deadline:string;
}

const db = new JsonDB(new Config("database", true, false, "/"));
async function addWorkout(){
  const workout = await inquirer.prompt([{
    type:'input',
    name: 'type',
    message:'What type of workout did you do?',
  },
  {
    type:'input',
    name: 'duration',
    message:'Enter the Workout duration in minutes:',
    validate: input => !isNaN(parseInt(input)),
  },
  {
    type:'list',
    name: 'intensity',
    message: 'Select the Workout intensity:',
    choices: ['Low', 'Medium', 'High'],
  }
])
db.push(`/workouts[]`,{
  id: Date.now().toString(),
  ...workout,
  date: new Date().toISOString().split('T')[0]
})
}
async function setGoals(){
  const goal = await inquirer.prompt([{
    type:'input',
    name: 'target',
    message:'Enter your fitness goal (e.g., Run 5k, lose 5 pound):',
  },
  {
    type:'input',
    name: 'deadline',
    message:'Enter the goal deadline(YYYY-MM-DD):'
  },
])
db.push(`/goals/current`,goal);

}
async function viewProgress(){
  async function viewProgress() {
    const workouts: Workout[] = await db.getData('/workouts');
    const currentGoal: Goal = await db.getData('/goals/current');
  
    if (workouts.length === 0) {
      console.log('No workouts found. Start by adding a new workout.');
      return;
    }
  
    // Calculate total workouts, total duration, and average duration
    const totalWorkouts = workouts.length;
    const totalDuration = workouts.reduce((acc, workout) => acc + workout.duration, 0);
    const averageDuration = totalDuration / totalWorkouts;
  
    // Group workouts by type
    const workoutTypes = workouts.reduce((acc: {[key: string]: number}, workout) => {
      acc[workout.type] = (acc[workout.type] || 0) + 1;
      return acc;
    }, {});
  
    // Display workouts summary
    console.log(`Total workouts: ${totalWorkouts}`);
    console.log(`Total duration: ${totalDuration} minutes`);
    console.log(`Average workout duration: ${averageDuration.toFixed(2)} minutes`);
    console.log('Workouts by type:');
    Object.entries(workoutTypes).forEach(([type, count]) => {
      console.log(`- ${type}: ${count}`);
    });
  
    // Display current goal and progress towards it
    if (currentGoal) {
      console.log(`Current goal: ${currentGoal.target}, Deadline: ${currentGoal.deadline}`);
      // Here you can add more logic to display progress towards the goal, such as percentage completed, etc.
    } else {
      console.log('No current fitness goal set.');
    }
  }
}

async function mainMenu(){
  const answer = await inquirer.prompt([{
    type:'list',
    name:'action',
    message:'What would you like to do?',
    choices:['Add Workout', 'Set Goals', 'View Progress', 'Exit']
  }])
  switch(answer.action){
    case 'Add Workout':
          await  addWorkout();
          break;
    case 'Set Goals':
         await setGoals();
         break;
    case 'View Progress':
          await viewProgress();
          break;
    case 'Exit':
          await process.exit();
          break;
  }
  mainMenu();
}
mainMenu();