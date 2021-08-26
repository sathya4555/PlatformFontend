
import React, { SyntheticEvent, useState } from 'react'




export const AddClient = (props: { name: string,getRoles:any[] }) => {
// console.log("studentpros",props.getRoles);
var SocketId
    const [name, setclientname] = useState('')
    // const [adminname, setadminname] = useState('')
    const [role, setrole] = useState('')
    const submit = async (e: SyntheticEvent) => {
       // e.preventDefault();
const adminname= props.name
 SocketId = sessionStorage.getItem('socket_id')
        const response = await fetch('https://localhost:4000/STUDENTCOURSE_SERVICE/STUDENT', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            //credentials: 'include',
            body: JSON.stringify({
                name,
                 adminname,
                 role,
                SocketId
            })
              
        }).then(response => response.json())
        .then(json => console.log(json));


console.log(role);

     //   const content = await response.json();

    }


    return (
        <div>
             <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Add Client</h1>

{/* 
        <input type="text" className="form-control"  placeholder="enter name" 
            onChange={e => setName(e.target.value)} /> */}

        <input type="text" className="form-control"  placeholder="Client name"
            onChange={e => setclientname(e.target.value)} />

         
   
{/*             
        <input type="text" className="form-control"  placeholder="RoleName"
            onChange={e => setrole(e.target.value)} /> */}


<select onChange={e => setrole(e.target.value)} className="form-select" aria-label="Default select example">
<option selected>---Role Name---</option>
    {props.getRoles.map(post =>(
          <option value={props.name===post.adminname?post.rolename:""}>{props.name===post.adminname?post.rolename:false}</option>
    ))}
  
</select>



        <button className="w-100 btn btn-lg btn-primary" type="submit">Add Client</button>

        </form>
        </div>
    )
}
