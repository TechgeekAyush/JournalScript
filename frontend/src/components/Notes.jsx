import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'

const Notes = () => {
    const { notes, setNotes } = useContext(NoteContext)
    return (
        <div className='row'>
            <h1 className='my-3'>Your notes</h1>
            {notes.map((note) => {
                return <NoteItem key={note._id} note={note} />
            })}
        </div>
    )
}

export default Notes