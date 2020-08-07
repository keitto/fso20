import React from 'react'

const Notification = ({message,angry}) => {
    if(message === null) {
        return null
    }
    const color = angry? 'red':'green'
    const style = {
        borderColor:color,
        color:color
    }
    return (
        <div className="notification" style={style}>
            {message}
        </div>
    )
}

export default Notification