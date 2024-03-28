"use strict";
//task 44
function make_sandwich(...items) {
    console.log("We have add the following items to the sandwich");
    for (let item of items) {
        console.log("- " + item);
    }
}
make_sandwich("salad");
make_sandwich("cheese", "ketchup", "Mayoneses");
