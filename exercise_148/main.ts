import inquirer from "inquirer";
import axios from "axios";

const API_KEY = '9114da5a4a4f1679f0617266a6f51263'

interface Weather_Response {
  location:string;
  temperature:string;
  description:string;
}
async function fetchWeather(city:string): Promise<Weather_Response> {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    return{
      location: response.data.name,
      temperature: `${response.data.main.temp} °C`,
      description: response.data.weather[0].description
    }
  } catch (err) {
    throw new Error(`Error: ${err}`)
  }
}

function display_weather(weather:Weather_Response){
  console.log(`Current weather in ${weather.location}:`)
  console.log(`Temperature: ${weather.temperature}`)
  console.log(`Conditions: ${weather.description}`)
}

function askCity(callback: (city:string) => void){
  inquirer.prompt([
    {
      type: 'input',
      name: 'city',
      message: 'Enter city to check the weather for:',
      validate: input => !!input || 'City name cannot be empty'
    }
  ]).then((answers) => {
    callback(answers['city'])
  })
}

function main(){
  askCity(async (city)=>{
    try{
      const weather = await fetchWeather(city)
      display_weather(weather)
    } catch (err) {
      console.log(err)
    }
  })
}

main();