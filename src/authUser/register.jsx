import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import Cookies from 'js-cookie';
import {register} from '../redux/authSlice'

export default function Register() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = { email, username, password, phone };

        dispatch(register(formData));

    }
    //const userData = JSON.parse(Cookies.get('user') || 'null');

    return (
        <div className='form-main p_100'>
            <div className="form-container">
                <h2>Registration</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                    <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" value={password} placeholder="Password" on onChange={(e) => setPassword(e.target.value)} required />
                    <input type="phome" value={phone} placeholder="Phome" onChange={(e) => setPhone(e.target.value)} required />
                    <button type="submit">Register</button>
                </form>
                <p>user data: {username}</p>
            </div>
        </div>
    )
}
