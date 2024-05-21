import './../styles/Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCSRFToken } from '../utils/csrf';

export default function Login() {
    const SERVER_URL = 'http://localhost:8000/api/login/';
    const navigate = useNavigate();
    
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
        const csrfToken = getCSRFToken();

        try {
            const response = await fetch(SERVER_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                body: JSON.stringify({
                    Email,
                    Password,
                }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const userData = await response.json();
            console.log('>>> [로그인] ✅ SUCCESS >>>', userData);

            navigate('/Chat');

        } catch (error) {
            console.error('>>> [로그인] 🤬 ERROR >>>', error);

            if (error.response && error.response.status === 404) {
                setErrorMessage('User not found. Please register.');
            } else {
                setErrorMessage('Login failed. Please try again.');
            }
        }

        console.log('email', Email);
        console.log('password', Password);
    }

    return (
        <div className='container'>
            <div className='login-left'></div>
            <div className='login-right'>
                <div className='login-right__text-box'>
                    <p className='login-right__k-rebot font'>K-REBOT</p>
                </div>
                <div className='login-right__text-box02'>
                    <p className='login-right__hello font'>Welcome back!</p>
                    <p className='login-right__hello font'>Glad to see you, Again!</p>
                </div>
                <form onSubmit={onSubmitHandler}>
                    <input
                        className="login-right__input-box font" type="Email" placeholder='Enter your email'
                        value={Email} onChange={onEmailHandler}
                    />
                    <input
                        className="login-right__input-box font" type="Password" placeholder='Enter your password'
                        value={Password} onChange={onPasswordHandler}
                    />
                    {errorMessage && (<div className='login-right__error-message'>{errorMessage}</div>)}
                    <button className='login-right__button font'>Login</button>
                </form>
            </div>
        </div>
    );
}
