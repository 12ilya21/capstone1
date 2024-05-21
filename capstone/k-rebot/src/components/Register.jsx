import './../styles/Register.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const URL_='http://127.0.0.1:8000/register/';

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [Language, setLanguage] = useState("");
    const [passwordError, setPasswordError] = useState('');
    const [filedError, setFiledError] = useState('');

    const navigate = useNavigate();

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
        if (ConfirmPassword && event.target.value !== ConfirmPassword) {
            setPasswordError("Password confirmation doesn't match.");
        } else {
            setPasswordError('');
        }
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
        if (Password !== event.target.value) {
            setPasswordError("Password confirmation doesn't match.");
        } else {
            setPasswordError('');
        }
    }

    const onLanguageHandler = (event) => {
        setLanguage(event.currentTarget.value);
    }

    const isFormValid = () => {
        return Email !== '' && Password !== '' && ConfirmPassword !== '' && Language !== '' && Language !== 'Choose your language';
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            setPasswordError("Password confirmation doesn't match.");
            return;
        }

        if (!isFormValid()) {
            setFiledError("Please specify all fields.");
            return;
        }

        const userData = {
            email: Email,
            password: Password,
            language: Language
        };

        fetch(URL_, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': window.csrftoken // CSRF 토큰 추가
            },
            body: JSON.stringify(userData),
            credentials: 'include'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('>>> [회원가입] ✅ SUCCESS >>>', data);
            navigate('/Login');
        })
        .catch(error => {
            console.error('>>> [회원가입] 🤬 ERROR >>>', error);
        });
    }

    return (
        <div className='container'>
            <div className='register-left'></div>
            <div className='register-right'>
                <div className='register-right__text-box'>
                    <p className='register-right__k-rebot font'>K-REBOT</p>
                </div>
                <div className='register-right__text-box02'>
                    <p className='register-right__hello font'>Hello! Register to get started</p>
                </div>
                <form onSubmit={onSubmitHandler}>
                    <input className="register-right__input-box font" name="email" type="Email" placeholder='Email' value={Email} onChange={onEmailHandler}/>
                    <input className="register-right__input-box font" name="password" type="Password" placeholder='Password' value={Password} onChange={onPasswordHandler}/>
                    <input className="register-right__input-box font" name="confirm-password" type="Password" placeholder='Confirm Password' value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                    {passwordError && <p className="register-right__error-message">{passwordError}</p>}
                    <select className="register-right__input-box font" name="language" value={Language} onChange={onLanguageHandler}>
                        <option className='register-right__input-box font'>Choose your language</option>
                        <option value="English">English</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Korean">Korean</option>
                    </select>
                    {filedError && <p className="register-right__error-message">{filedError}</p>}
                    <button className='register-right__button font'>Register</button>
                </form>
            </div>
        </div>
    );
}