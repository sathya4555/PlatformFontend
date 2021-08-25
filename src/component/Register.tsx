import React, { useState } from 'react'
import { SyntheticEvent } from 'react';
import { Redirect } from 'react-router';

export const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:4003/component/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/login"/>;
    }

    return (
        <div>
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>


        <input type="text" className="form-control"  onChange={e => setName(e.target.value)}  placeholder="enter name" />

        <input type="password" className="form-control"    onChange={e => setPassword(e.target.value)} placeholder="Password" />

         
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

        </form>
        </div>
    )
}
