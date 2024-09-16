import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'

const Notes = () => {
    const { notes, getNotes, editNote } = useContext(NoteContext)
    const [note, setNote] = useState({ id: "", title: "", description: "" })
    useEffect(() => {
        getNotes()
    }, []) // to fetch notes only once when component is mounted

    const ref = useRef(null)
    const refClose = useRef(null);
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, title: currentNote.title, description: currentNote.description });
    }

    const handleClick = (e) => {
        e.preventDefault()
        editNote(note.id, note.title, note.description)
        refClose.current.click();
    }

    const handleOnChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote />
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={handleOnChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={handleOnChange} required />
                                </div>

                                <div className="modal-footer">
                                    <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" disabled={note.title.length < 3 || note.description.length < 8} onClick={handleClick} className="btn btn-primary">Update note</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <h1 className='my-3'>Your notes</h1>
                <div className="container mx-2">
                    {notes.length === 0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes