import React, {useContext} from 'react'
import NoteContext from '../context/notes/noteContext'

export const NoteItem = (props) => {
    const context = useContext(NoteContext)
    const { deleteNote } = context
    const { note, updateNote } = props

    return (
        <div className='col-md-3 my-5'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash-can" onClick={()=>{deleteNote(note._id)}}></i>
                    <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{updateNote(note)}}></i>
                </div>
            </div>
        </div>
    )
}
