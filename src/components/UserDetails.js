import React, {useContext} from 'react'
import NoteContext from '../context/notes/noteContext'

export const UserDetails = async () => {
    const context = useContext(NoteContext)
    const { getUserDetails } = context
    console.log(getUserDetails.token)
    return (
        <div>
            {/* {getUserDetails} */}
        </div>
    )
}
