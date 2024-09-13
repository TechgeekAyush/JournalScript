import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:3000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
    //function to get notes
    const getNotes = async () => {
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNDUzNDkyZGRmMDAzZWNjOTI3MjZkIn0sImlhdCI6MTcyMzA5Mzg4OX0.UB-T_Fawt7D1NErnVXS8f-QhAU7dyk9BzJifX0ha7xs"
            },
        });
        const json = await response.json();
        setNotes(json)
    }

    //function to add note
    const addNote = async (title, description) => {
        //API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNDUzNDkyZGRmMDAzZWNjOTI3MjZkIn0sImlhdCI6MTcyMzA5Mzg4OX0.UB-T_Fawt7D1NErnVXS8f-QhAU7dyk9BzJifX0ha7xs"
            },
            body: JSON.stringify({title, description})
        });
        const json = response.json();
        //Logic to add on client side
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
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNDUzNDkyZGRmMDAzZWNjOTI3MjZkIn0sImlhdCI6MTcyMzA5Mzg4OX0.UB-T_Fawt7D1NErnVXS8f-QhAU7dyk9BzJifX0ha7xs"
            }
        });
        const json = response.json();
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    //function to edit note
    const editNote = async (id, title, description) => {
        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNDUzNDkyZGRmMDAzZWNjOTI3MjZkIn0sImlhdCI6MTcyMzA5Mzg4OX0.UB-T_Fawt7D1NErnVXS8f-QhAU7dyk9BzJifX0ha7xs"
            },
            body: JSON.stringify({title, description})
        });
        const json = response.json();

        // Logic to edit in client side
        for (let index = 0; index < notes.length; index++) {
            const element = array[index];
            if (element._id === id) {
                element.title = title
                element.description = description
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;