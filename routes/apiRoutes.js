const notes = require('../db/db.json');
const uniqid = require('uniqid');
const fs = require('fs');
module.exports = (app) => {

    // get request to db.json file
    app.get('/api/notes', (req, res) => res.json(notes));
    // fs.readFile(path.join(__dirname, "../db/db.json"), 'utf-8', (err, notes) => {
    //     if (err) throw err;
    //     res.json(JSON.parse(notes))
    // })

    // post request to db.json file
    app.post('/api/notes', (req, res) => {
        const note = req.body
        let newNote = {
            "title": note.title,
            "text": note.text,
            "id": uniqid()
        }
        notes.push(newNote)
        res.json(note);
        console.log(note)
    });

}