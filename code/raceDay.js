let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = false;
let ageOfRunner = 18;

if (ageOfRunner >= 18 && earlyRegistration === true) {
    raceNumber *= 1000;
}
if (ageOfRunner >= 18 && earlyRegistration === true) {
    console.log(`Your race number is ${raceNumber} and your race starts at 9:30AM`);
} 
else if (ageOfRunner >= 18 && earlyRegistration != true) {
    console.log(`Your race number is ${raceNumber} and your race starts at 11AM`);
} 
else if (ageOfRunner < 18) {
    console.log(`Your race number is ${raceNumber} and race beings at 12:30PM`);
}