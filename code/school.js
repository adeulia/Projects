class School {
    constructor(name, numberOfStudents, level) {
        this._name = name;
        this._numberOfStudents = numberOfStudents;
        this._level = level;
    }

    get name() {
        return this._name;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    get level() {
        return this._level;
    }

    set numberOfStudents(value) {
        if (typeof value === Number) {
            this._numberOfStudents = value;
        } else {
            return "Invalid input: numberOfStudents must be set to a Number."
        }
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.level} students at the ${this.numberOfStudents} school level`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        let randomNum = Math.floor(Math.random() * substituteTeachers.Length);
        return substituteTeachers[randomNum];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, "primary", numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, "high", numberOfStudents);
        this._sportsteams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");

console.log(lorraineHansbury.quickFacts());

const sub = School.pickSubstituteTeacher(["Jamal Crawford", "Lou Williams", "J.R. Smith", "James Harden", "Jason Terry", "Manu Ginobli"]);
const alSmith = new HighSchool("Al E. Smith", 415, ["Baseball", "Basketball", "Volleyball", "Track and Field"]);


console.log(alSmith._sportsteams);