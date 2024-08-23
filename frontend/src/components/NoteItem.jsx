import React, { useContext } from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { VscEdit } from "react-icons/vsc";
import NoteContext from '../context/notes/NoteContext'

const NoteItem = (props) => {
    const { deleteNote } = useContext(NoteContext)
    const { note } = props
    return (
        <div className="col-lg-3 my-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <button type="button" className="btn btn-outline-danger me-2" onClick={() => {deleteNote(note._id)}}><MdOutlineDelete /></button>
                    <button type="button" className="btn btn-outline-primary"><VscEdit /></button>
                </div>
            </div>
        </div>
    )
}

export default NoteItem