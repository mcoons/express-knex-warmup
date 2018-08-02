const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const queries = require('./queries');

app.get('/', (request, response, next) => {
    queries.list().then(student => {
        response.json({student});
    }).catch(next);
});

app.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(student => {
        student
            ? response.json({student})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

app.post("/", (request, response, next) => {
    queries.create(request.body).then(student => {
        response.status(201).json({student: student});
    }).catch(next);
});

app.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

app.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(student => {
        response.json({student: student[0]});
    }).catch(next);
});

app.use((error, request, response, next) => {
    response.status(400).send('error from app use');
});

app.get((error, request, response, next) => {
    res.status(500).send('Something broke!');
});

module.exports = app;