import React from 'react'

export const Alert = (props) => {
    return (
        <>
            <div class="alert alert-success" role="alert">
                {props.message}
            </div>
        </>
    )
}
