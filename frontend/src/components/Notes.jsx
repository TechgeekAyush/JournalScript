import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'

const Notes = () => {
    const { notes } = useContext(NoteContext)
    return (
        <>
            <AddNote />
            <div className='row'>
                <h1 className='my-3'>Your notes</h1>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes