let mutableValue = "initial value";
//console.log(mutableValue);

try {
let attemptToChangeMutableValue = mutableValue = "new value";
//console.log(attemptToChangeMutableValue);
} catch (e) {
    console.log(e);
}

const immutable = 'constant value';
//const attemptToChangeImmutable = immutable = 'new value'; // will throw type error as well
try {
    immutable = 'new value';
} catch (e) {
    console.log(e);
}