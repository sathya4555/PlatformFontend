import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from 'react-router';

export const Login = (props: { setName: (name: string) => void }) => {


    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:4003/component/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                name,
                password
            })
        });

        const content = await response.json();
         props.setName(content.name);
         setRedirect(true);
      
    }
    
    if (redirect) {
        return <Redirect to="/"/>;
    }


    
    return (
        <div>
        <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>


        <input type="text" className="form-control"  placeholder="enter name" 
            onChange={e => setName(e.target.value)} />

        <input type="password" className="form-control"  placeholder="Password"
            onChange={e => setPassword(e.target.value)} />

         
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

        </form>
        </div>
    )
}
