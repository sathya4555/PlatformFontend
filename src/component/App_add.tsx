import React, { SyntheticEvent, useState } from 'react'

export const App_add = (props: { name: string,getRoles:any[] }) => {
    var SocketId
    const [appname, setclientname] = useState('')
    // const [adminname, setadminname] = useState('')
    const [appdesciption, setrole] = useState('')
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
const adminname= props.name
 SocketId = sessionStorage.getItem('socket_id')
        const response = await fetch('https://localhost:4000/STUDENTCOURSE_SERVICE/APP', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            //credentials: 'include',
            body: JSON.stringify({
                appname,
                 adminname,
                 appdesciption,
                SocketId
            })
              
        }).then(response => response.json())
        .then(json => console.log(json));


console.log();

     //   const content = await response.json();

    }


    return (
        <div>
             <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Add App</h1>

{/* 
        <input type="text" className="form-control"  placeholder="enter name" 
            onChange={e => setName(e.target.value)} /> */}

        <input type="text" className="form-control"  placeholder="App name"
            onChange={e => setclientname(e.target.value)} />


<input type="text" className="form-control"  placeholder="App Description"
            onChange={e => setrole(e.target.value)} />

         
   
{/*             
        <input type="text" className="form-control"  placeholder="RoleName"
            onChange={e => setrole(e.target.value)} /> */}

{/* 
<select onChange={e => setrole(e.target.value)} className="form-select" aria-label="Default select example">
<option selected>---Role Name---</option>
    {props.getRoles.map(post =>(
          <option value={props.name===post.adminname?post.rolename:""}>{props.name===post.adminname?post.rolename:false}</option>
    ))}
  
</select>
 */}


        <button className="w-100 btn btn-lg btn-primary" type="submit">Add App</button>

        </form>
        </div>
    )
}
