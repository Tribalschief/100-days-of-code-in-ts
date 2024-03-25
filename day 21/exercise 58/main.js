"use strict";
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["car"] = 0] = "car";
    Vehicles[Vehicles["truck"] = 1] = "truck";
    Vehicles[Vehicles["motorcycle"] = 2] = "motorcycle";
})(Vehicles || (Vehicles = {}));
console.log(`Vehicles: ${Vehicles.car}, ${Vehicles.motorcycle}, ${Vehicles.truck}`);
console.log(Vehicles);
