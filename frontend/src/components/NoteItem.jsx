import React from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { VscEdit } from "react-icons/vsc";

const NoteItem = (props) => {
    const { note } = props
    return (
        <div className="col-lg-3 my-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <button type="button" class="btn btn-outline-secondary"><MdOutlineDelete /></button>
                    <button type="button" class="btn btn-outline-secondary"><VscEdit /></button>
                </div>
            </div>
        </div>
    )
}

export default NoteItem