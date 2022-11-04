import { Avatar } from '@mui/material';
import React from 'react'
import './SidebarChat.css';
function SidebarChat({message, roomName, imageUrl}) {
  return (
    <div className='sidebarChat'>
      <Avatar src={imageUrl}/>
      <div className='sidebarChat__info'>
        <h3>{roomName}</h3>
        <p>{message}</p>
      </div>

    </div>
  )
}

export default SidebarChat
