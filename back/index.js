var express = require('express');
var cors = require('cors');

var app = express()

app.use(cors())
app.use(express.json());

const answers = {
    island: '🏖️',
    jungle: 'debarquement',
    temple: 'le nord mendie',
    closed: '06/06/1944',
}


// POST method route
app.post('/', function (req, res) {
    const { page, answer } = req.body;

    console.log(page, answer)

    if (!answers.hasOwnProperty(page)) {
        res.sendStatus(404);
        return;
    }

    
    res.send(JSON.stringify({
        gotIt: (answers[page] === answer)
    }));
});

app.listen(3000);