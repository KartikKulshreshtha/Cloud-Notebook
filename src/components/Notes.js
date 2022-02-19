import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import { NoteItem } from './NoteItem'
import AddNote from './AddNote'
import { useNavigate } from 'react-router-dom'

export const Notes = (props) => {
    const context = useContext(NoteContext)
    const navigate = useNavigate()
    const { notes, getallNotes, editNote } = context
    const [note, setNote] = useState({ id: "", utitle: "", udescription: "", utag: "" })
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getallNotes()
        }
        else {
            navigate('/login')
        }
        //eslint-disable-next-line
    }, [])

    const ref = useRef(null)
    const refCancel = useRef(null)

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, utitle: currentNote.title, udescription: currentNote.description, utag: currentNote.tag })
    }

    const handleNote = async (e) => {
        editNote(note.id, note.utitle, note.udescription, note.utag)
        refCancel.current.click();
        props.showAlert("Your Note has been updated successfully!!", 'success')
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AddNote showAlert={props.showAlert} />
            <button style={{ display: "none" }} type="button" ref={ref} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                    <input type="text" className="form-control" name='utitle' value={note.utitle} id="title" onChange={onChange} aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label" style={{ fontWeight: "bold" }}>Description</label>
                                    <input type="text" className="form-control" name='udescription' value={note.udescription} onChange={onChange} id="description" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label" style={{ fontWeight: "bold" }}>Tag</label>
                                    <input type="text" className="form-control" name='utag' value={note.utag} onChange={onChange} id="tag" />
                                </div>
                                {/* <button type="submit" className="btn btn-success" style={{ backgroundColor: "#3d7872!important" }}>Add Note</button> */}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refCancel} type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.utitle.length < 5 || note.udescription.length < 5} type="button" className="btn btn-success" onClick={handleNote}>Save Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <h1>Your Notes</h1>
                <div className="container mx-2">
                    {notes.length === 0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} showAlert={props.showAlert} updateNote={updateNote} note={note} />
                })}
            </div>
        </>

    )
}