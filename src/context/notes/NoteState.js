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
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwOWZiNWIxNTM5MWNiMDNkN2QwZDkzIn0sImlhdCI6MTY0NDgyNTUzMX0.tBCT6ANCENdCS1A-6OBoOQoFYyR2HcPVXkpL60Tyjc0"
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
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwOWZiNWIxNTM5MWNiMDNkN2QwZDkzIn0sImlhdCI6MTY0NDgyNTUzMX0.tBCT6ANCENdCS1A-6OBoOQoFYyR2HcPVXkpL60Tyjc0"
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = {
      "_id": "620ca35499616b6afd577d684",
      "user": "6209fb5b15391cb03d7d0d93",
      "title": title,
      "description": description,
      "tag": tag,
      "timestamp": "2022-02-16T07:10:12.799Z",
      "__v": 0
    }
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
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwOWZiNWIxNTM5MWNiMDNkN2QwZDkzIn0sImlhdCI6MTY0NDgyNTUzMX0.tBCT6ANCENdCS1A-6OBoOQoFYyR2HcPVXkpL60Tyjc0"
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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwOWZiNWIxNTM5MWNiMDNkN2QwZDkzIn0sImlhdCI6MTY0NDgyNTUzMX0.tBCT6ANCENdCS1A-6OBoOQoFYyR2HcPVXkpL60Tyjc0"
      },
      body: JSON.stringify({ title, description, tag })
    });
    // const json = response.json();

    // This login is to edit the client notes details
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getallNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteStates;