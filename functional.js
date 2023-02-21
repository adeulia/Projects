//always make sure your callback contains a return statement.
const tasks = [
    {
        'Name' : 'Write for Envato Tuts+',
        'duration' : 120
    },
    {
        'name' : "work out",
        'duration' : 60
    },
    {
        'name' : 'Procrastinate on Duolingo',
        'duration' : 240
    }
];

const map1 = tasks.map(x => x.Name, );
console.log(map1);

