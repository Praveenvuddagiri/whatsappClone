import { MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import './Chat.css';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios';
import { useStateValue } from './StateProvider';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import DeleteIcon from '@mui/icons-material/Delete';

function Chat({ messages, clearWindow}) {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState('');
  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
      message: input,
      name: user.displayName,
      timeStamp: new Date().toUTCString(),
      received: true,
    });

    setInput('');
  }

  const deleteAll = () => {
    axios.delete('/messages/clear');
    clearWindow();
  }

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src='https://cdn3.iconfinder.com/data/icons/emotion-30/32/smile-512.png'/>
        <div className='chat__headerInfo'>
          <h3>Funny Chats</h3>
          <p>Last seen at ....</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton onClick={deleteAll}>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        {messages.map((message) => (
          <p className={`chat__message ${message.name === user.displayName && 'chat__reciever'}`}>
            <span className='chat__name'>{message.name}</span>
            {message.message}
            <span className='chat__timestamp'>
              {message.timeStamp}
            </span>
          </p>

        ))}

      </div>

      <div className='chat__footer'>
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>

        <form>
          <input placeholder='Type a message'
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type='submit' onClick={sendMessage}>Sent a message</button>
        </form>

        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Chat
