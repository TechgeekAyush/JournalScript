import React, { useContext,useState } from 'react'
import NoteContext from '../context/notes/NoteContext'

const AddNote = () => {
    const { addNote } = useContext(NoteContext)
    const [note, setNote] = useState({title:"", description:""})
    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description)
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
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={handleOnChange} />
                </div>
                <button type="submit" className="btn btn-success" onClick={handleClick}>Add note</button>
            </form>
        </>
    )
}

export default AddNote