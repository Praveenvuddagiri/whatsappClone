import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import SideBar from './SideBar';
import Pusher from 'pusher-js';
import axios from './axios';
import './Main.css';
function Main() {

    const [messages, setMessages] = useState([]);


    const clearWindow = () => {
        setMessages([]);
        localStorage.removeItem('lastMessage');
    }
    useEffect(() => {
        axios.get('/messages/sync').then((response) => {
            setMessages(response.data);
        })
    }, []);


    useEffect(() => {
        const pusher = new Pusher('3e9a532654b4d2f0f35b', {
            cluster: 'ap2'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (data) => {
            setMessages([...messages, data]);

            localStorage.setItem('lastMessage', data.message);

        });


        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [messages]);


    return (
        <div className="main">
            <div className='main__body'>
                <SideBar messages={messages} />
                <Chat messages={messages} clearWindow={clearWindow} />
            </div>
        </div>
    );
}

export default Main;
