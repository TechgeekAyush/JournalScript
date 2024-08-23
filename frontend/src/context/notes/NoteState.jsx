import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "66b4cac269b567a3e8471bbd1",
            "user": "66b453492ddf003ecc92726d",
            "title": "My title 2",
            "description": "My description 2",
            "date": "2024-08-08T13:40:18.186Z",
            "__v": 0
        },
        {
            "_id": "66ba169964c3d57163b2924c2",
            "user": "66b453492ddf003ecc92726d",
            "title": "My title 1",
            "description": "My description 1",
            "date": "2024-08-12T14:05:13.417Z",
            "__v": 0
        },
        {
            "_id": "66ba16a164c3d57163b2924e3",
            "user": "66b453492ddf003ecc92726d",
            "title": "My title 3",
            "description": "My description 3",
            "date": "2024-08-12T14:05:21.168Z",
            "__v": 0
        },
        {
            "_id": "66ba16a664c3d57163b292504",
            "user": "66b453492ddf003ecc92726d",
            "title": "My title 4",
            "description": "My description 4",
            "date": "2024-08-12T14:05:26.263Z",
            "__v": 0
        },
        {
            "_id": "66ba16aa64c3d57163b292525",
            "user": "66b453492ddf003ecc92726d",
            "title": "My title 5",
            "description": "My description 5",
            "date": "2024-08-12T14:05:30.617Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    //function to add note
    const addNote = (title, description) => {
        const note = {
            "_id": "66ba16aa64c3d57163b292525",
            "user": "66b453492ddf003ecc92726d",
            "title": title,
            "description": description,
            "date": "2024-08-12T14:05:30.617Z",
            "__v": 0
        }
        setNotes(notes.concat(note)) // not using push as it does not return a new array, whereas concat function does which can be used to set the notes.
    }

    //function to delete note
    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => {return note._id !== id})
        setNotes(newNotes)
    }

    //function to edit note
    const editNote = () => {

    }

    return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
        {props.children}
    </NoteContext.Provider>
    )
}

export default NoteState;