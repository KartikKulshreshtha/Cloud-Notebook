import React, {useContext} from 'react'
import NoteContext from '../context/notes/noteContext'
import { NoteItem } from './NoteItem'

export const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, setNotes } = context
    return (
        <div className='row'>
            <h1>Your Notes</h1>
            {notes.map((note) => {
                return <NoteItem note={note}/>
            })}
        </div>
    )
}
