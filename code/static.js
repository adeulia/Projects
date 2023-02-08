class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    static generateName() {
        const names = ["Angle","Spike","Buffy", "Willow", "Tara"];
        const randomNumber = Math.floor(Math.random() * 5);
        return names[randomNumber];
    }
}