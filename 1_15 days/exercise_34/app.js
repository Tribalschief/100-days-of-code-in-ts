"use strict";
//task 38
function describe_city(city, country = "Pakistan") {
    console.log(`The ${city} is in ${country}`);
}
describe_city("Karachi", "Pakistan");
describe_city("Lahore");
describe_city("Jerusalem", "Palestine");
