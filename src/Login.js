import { Button } from '@mui/material'
import React from 'react'
import './Login.css';
import GoogleIcon from '@mui/icons-material/Google';
import {auth} from './firebase';
import  {provider} from './firebase';
import {useStateValue} from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const[{}, dispatch] = useStateValue();
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user);
        })
        .catch(e => alert(e.message));
    }


    return (
        <div className='login'>
            <div className='login__container'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png'
                    alt='whatsapp-logo' />

                <div className='login__text'>
                    <h1>Sign in to Whatsapp</h1>
                </div>

                <Button type='submit' onClick={signIn}>
                    <GoogleIcon className='login__google'/> 
                    <span>Sign In With Google</span>
                </Button>
            </div>

        </div>
    )
}

export default Login
