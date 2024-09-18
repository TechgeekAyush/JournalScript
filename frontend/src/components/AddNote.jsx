import React, { useContext,useState } from 'react'
import NoteContext from '../context/notes/NoteContext'

const AddNote = (props) => {
    const { addNote } = useContext(NoteContext)
    const [note, setNote] = useState({title:"", description:""})
    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description)
        props.showAlert("Added successfully", "success")
        setNote({title:"", description:""})
    }

    const handleOnChange = (e) => {
        setNote({...note, [e.target.name] : e.target.value})
    }

    return (
        <>
            <h1 className='my-3'>Add a note</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={handleOnChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={handleOnChange} required />
                </div>
                <button disabled={note.title.length < 3 || note.description.length < 8} type="submit" className="btn btn-success" onClick={handleClick}>Add note</button>
            </form>
        </>
    )
}

export default AddNote