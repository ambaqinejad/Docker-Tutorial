const express = require('express');
const connectToDB = require('./helpers');

const port = process.env.PORT || 3000;

async function starter() {
    const app = express();

    app.get('/', (req, res) => {
        res.send('<h1>Hello world!</h1>');
    })

    const connection = await connectToDB();

    console.log(connection);

    app.listen(port, () => {
        console.log(`App is running on port ${port}`);
    });
}

starter()