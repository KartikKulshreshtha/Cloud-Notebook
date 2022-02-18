import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import { NoteItem } from './NoteItem'
import AddNote from './AddNote'

export const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, getallNotes } = context
    const [note, setNote] = useState({utitle: "", udescription: "", utag: ""})
    useEffect(() => {
        getallNotes()
        //eslint-disable-next-line
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({utitle:currentNote.title, udescription: currentNote.description, utag: currentNote.tag})
    }
    const ref = useRef(null)

    const handleNote = (e)=>{
        e.preventDefault();
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <>
            <AddNote />
            <button style={{display: "none"}} type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Your note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" style={{ fontWeight: "bold" }} className="form-label">Title</label>
                                    <input type="text" className="form-control" name='utitle' value={note.title} id="title" onChange={onChange} aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label" style={{ fontWeight: "bold" }}>Description</label>
                                    <input type="text" className="form-control" name='udescription' value={note.description} onChange={onChange} id="description" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label" style={{ fontWeight: "bold" }}>Tag</label>
                                    <input type="text" className="form-control" name='utag' value={note.tag} onChange={onChange} id="tag" />
                                </div>
                                {/* <button type="submit" className="btn btn-success" style={{ backgroundColor: "#3d7872!important" }}>Add Note</button> */}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={handleNote}>Save Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <h1>Your Notes</h1>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>

    )
}
