import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    // const host = "http://localhost:3000"
    const host = "https://journalscript.vercel.app"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
    //function to get notes
    const getNotes = async () => {
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
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
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({title, description})
        });
        const note = await response.json();
        //Logic to add on client side
        setNotes(notes.concat(note)) // not using push as it does not return a new array, whereas concat function does which can be used to set the notes.
    }

    //function to delete note
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json();
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
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({title, description})
        });
        const json = await response.json();

        // Logic to edit in client side
        let newNotes = JSON.parse(JSON.stringify(notes)) // creating a copy of the notes
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title
                newNotes[index].description = description
                break;
            }
        }
        setNotes(newNotes); // resetting the notes array by making the edit changes to the corresponding note
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;