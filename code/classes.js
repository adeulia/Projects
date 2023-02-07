const obj = {
    log: ["example", "test"],
    get latest() {
        if (this.log.length === 0) return undefined;
        return this.log[this.log.length - 1];
    },
};

console.log(obj.latest);

const daysOfTheWeek = {
    week: ["Monday", "Tuesday", "Wednessay", "Thursday", "Friday", "Saturday", "Sunday"],
    get input() {
        if (this.week.length ===  0) return undefined;
        return this.week[this.week.length - 1];
    },
};

console.log(daysOfTheWeek.input)