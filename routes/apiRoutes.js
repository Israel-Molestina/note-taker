const noteData = require('../db/db.json');

module.exports = (app) => {

    // get request to db.json file
    app.get('/api/notes', (req, res) => res.json(noteData));

    // post request to db.json file
    app.post('/api/notes', (req, res) => {
        noteData.push(req.body)
        res.json(req.body);
    });
}