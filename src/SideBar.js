import React from 'react';
import './SideBar.css';
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { SearchOutlined } from '@mui/icons-material';
import { useStateValue } from './StateProvider';
import SidebarChat from './SidebarChat';
function SideBar({messages}) {

  const [{ user }, dispatch] = useStateValue();
  const message = localStorage.getItem('lastMessage') ? localStorage.getItem('lastMessage') : "No messages yet";
  
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src= {user.photoURL} />
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined />
          <input placeholder='search or start new chat' type='text' />
        </div>
      </div>

      <div className='sidebar__chats'>
        <SidebarChat message={message} roomName={"Funny Chats"} imageUrl={"https://cdn3.iconfinder.com/data/icons/emotion-30/32/smile-512.png"} />
        <SidebarChat message={"Dummy message"} roomName={"React Developers"} imageUrl={"https://blog.leonhassan.co.uk/content/images/2019/01/react-1.svg"} />
        <SidebarChat message={"Dummy message"} roomName={"College Group"} imageUrl={"https://previews.123rf.com/images/tuktukdesign/tuktukdesign1606/tuktukdesign160600198/59972250-student-icon-with-laptop-computer-online-graduation-academic-education-degree-icon-in-glyph-vector-i.jpg"} />
      </div>
    </div>
  )
}

export default SideBar
