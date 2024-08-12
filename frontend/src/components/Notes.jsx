import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

const Notes = () => {
    const { notes, setNotes } = useContext(NoteContext)
    return (
        <>
        <h1 className='my-3'>Your notes</h1>
        {notes.map((note) => {
            return note.title
        })}
        </>
  )
}

export default Notes