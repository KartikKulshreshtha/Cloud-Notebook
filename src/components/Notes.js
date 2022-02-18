import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/noteContext'
import { NoteItem } from './NoteItem'
import AddNote from './AddNote'

export const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, getallNotes } = context
    useEffect(() => {
      getallNotes()
    }, [])
    
    return (
        <>
            <AddNote />
            <div className='row'>
                <h1>Your Notes</h1>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </>

    )
}
