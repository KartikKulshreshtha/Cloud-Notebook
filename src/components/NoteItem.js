import React from 'react'

export const NoteItem = (props) => {
    const { note } = props
    return (
        <div className='col-md-3 my-5'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash-can"></i>
                    <i className="fa-solid fa-pen-to-square mx-3"></i>
                </div>
            </div>
        </div>
    )
}
