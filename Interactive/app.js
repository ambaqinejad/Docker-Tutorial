const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readLine.question('What is your name?', (answer) => {
    console.log(`Your name is ${answer}`);
})