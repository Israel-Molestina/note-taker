const notes = require('../db/db.json');
const uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');

module.exports = (app) => {

    // get request to db.json file
    app.get('/api/notes', (req, res) => res.json(notes));

    // post request to db.json file
    app.post('/api/notes', (req, res) => {
        const note = req.body
        console.log(note);
        let newNote = {
            title: note.title,
            text: note.text,
            id: uniqid()
        };
        notes.push(newNote)
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err, data) => {
            if (err) throw err;
            return res.json(notes);
        });
    });


    // deltes note with id
    app.delete('/api/notes/:id', (req, res) => {
        console.log(req)
        let noteId = req.params.id
        console.log(noteId);

        
        // let notesId 
        // for (let i = 0; i < notes.length; i++) {
        //     console.log(res.json(notes[i].id))
        // }
        // console.log(notesId)
    } )

}