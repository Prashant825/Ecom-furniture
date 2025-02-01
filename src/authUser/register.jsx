import React from 'react'

export default function register() {
    return (
        <div className='form-main p_100'>
            <div className="form-container">
                <h2>Registration</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <input type="phome" placeholder="Phome" required />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}
