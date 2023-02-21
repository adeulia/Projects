const sum = (firstParam, secondParam) => {
    return firstParam + secondParam;
};

//console.log(sum(7, 7));

const printHello = () => {
    console.log("Hello");
};
//printHello();

//arrow function with single param and have () or no ()
const checkWeight = (weight) => {
    //console.log(`Baggage weight ${weight} kilos`);
};
checkWeight(25);

//consise arrow functions
const multiply = (a, b) => a*b;
//console.log(multiply(5,5));

//anonymous
const rocketToMars = function() {
    return "Boom!";
}
//named
function rocketToMoon() {
    return "Boom";
}

//implementing moduls in NODE
//module.exports();

const reverseWords = (sentence) => {
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        console.log(i);
        //words[i] = words[i].split('').reverse().join('');
        words[i] = words[i].split('');
    }
    console.log(words);

    return words.join(" ");
}

reverseWords("This is a string");

