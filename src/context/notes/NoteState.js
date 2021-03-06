import NoteContext from "./noteContext";
import { useState } from "react";

const NoteStates = (props) => {
  const host = "http://localhost:5000";
  const initialNotes = []
  const [notes, setNotes] = useState(initialNotes)

  const getallNotes = async ()=>{
    // API CALL
    const response = await fetch(`${host}/notes/fetchingallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json()
    setNotes(json)
  }

//-------------------------------------------------------------------------------------------

  // Function to Add a Note
  const addNote = async (title, description, tag) => {
    // Here we are calling the API
    const response = await fetch(`${host}/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });

    
    const note = await response.json()
    setNotes(notes.concat(note))
  }

  // --------------------------------------------------------------------------------------------
  // Function to Delete a Note
  const deleteNote = async (id) => {
    // API CALL
    const response = await fetch(`${host}/notes/deletingnote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // --------------------------------------------------------------------------------------------

  // Function to Edit a Note
  const editNote = async (id, title, description, tag) => {

    // Here we are calling the API
    const response = await fetch(`${host}/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    // const json = response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))
    // This login is to edit the client notes details
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }

    }
    setNotes(newNotes)
  }

  // ----------------------------------------------------------------------------------------
  // Function to get users details
  // const getUserDetails = async ()=>{
  //   const response = await fetch("http://localhost:5000/authentication/getuser", {
  //       method: "POST",
  //       headers: {
  //           'Content-Type': 'application/json',
  //           'auth-token': localStorage.getItem('token')
  //       },
  //   });
  //   return response.json()
  // }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getallNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteStates;