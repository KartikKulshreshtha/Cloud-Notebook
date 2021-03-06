import React, {useContext, useState} from 'react'
import NoteContext from '../context/notes/noteContext'

const AddNote = (props) => {
    const context = useContext(NoteContext)
    const { addNote } = context
    const [note, setNote] = useState({title: "", description: "", tag: ""})
    const handleNote = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Your note added successfully", 'success')
        console.log("Mpppppp")
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <div className="container my-5">
                <h1>Add a Note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" style={{fontWeight: "bold"}} className="form-label">Title</label>
                        <input type="text" className="form-control" name='title' value={note.title} id="title" onChange={onChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label" style={{fontWeight: "bold"}}>Description</label>
                        <input type="text" className="form-control" name='description' value={note.description} onChange={onChange} id="description" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label" style={{fontWeight: "bold"}}>Tag</label>
                        <input type="text" className="form-control" name='tag' value={note.tag} onChange={onChange} id="tag" />
                    </div>
                    <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-success" onClick={handleNote} style={{ backgroundColor: "#3d7872!important" }}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote
