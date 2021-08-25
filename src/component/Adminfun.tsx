import React, { SyntheticEvent, useState } from 'react'


export const Adminfun = (props: { name: string },{}) => {

const [rolename, setrole] = useState('')
// const [methodname, setmethodname] = useState('')
const [add, setadd] = useState('')
const [readonly, setreadonly] = useState('')
const [update, setupdate] = useState('')
const [setdelete, setsetdelete] = useState('')


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
const adminname= props.name
 console.log(adminname);
//  console.log(role);
  //console.log(methodname);

 let methodname: Array<string> = [add,readonly,update,setdelete];
 console.log(methodname);
 var SocketId = sessionStorage.getItem('socket_id')
        const response = await fetch('https://localhost:4000/STUDENTCOURSE_SERVICE/ROLE', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
           // credentials: 'include',
            body: JSON.stringify({
                rolename,
                adminname,
                methodname,
                SocketId
            })
        });
// console.log(role);
// console.log(name);

        const content = await response;

    }


    return (
        <div>
             <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Add Role</h1>

{/* 
        <input type="text" className="form-control"  placeholder="enter name" 
            onChange={e => setName(e.target.value)} /> */}

        <input type="text" className="form-control"  placeholder="RoleName"
            onChange={e => setrole(e.target.value)} />
{/* 
<input type="text" className="form-control"  placeholder="Enter method name"
            onChange={e => setmethodname(e.target.value)} /> */}

{/* <select  onChange={e => setmethodname(e.target.value)} className="form-select" aria-label="Default select example">
  <option selected>Enter permissions</option>
  <option selected value="add">One</option>
  <option value="readonly">Two</option>
  <option value="update">Three</option>
  <option value="delete">Three</option>
</select> */}
<h6 style={{padding:5}}>Permissions</h6>

<div className="form-check">
  <input   onChange={e => setadd(e.target.value)} className="form-check-input" type="checkbox" value="add" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Add
  </label>
</div>
<div className="form-check">
  <input  onChange={e => setreadonly(e.target.value)} className="form-check-input" type="checkbox" value="readonly"  />
  <label className="form-check-label" htmlFor="flexCheckChecked">
    Readonly
  </label>
</div>

<div className="form-check">
  <input  onChange={e => setupdate(e.target.value)} className="form-check-input" type="checkbox" value="update"  />
  <label className="form-check-label" htmlFor="flexCheckChecked">
    Update
  </label>
</div>

<div className="form-check">
  <input  onChange={e => setsetdelete(e.target.value)} className="form-check-input" type="checkbox" value="delete"  />
  <label className="form-check-label" htmlFor="flexCheckChecked">
    Delete
  </label>
</div>
         
        <button className="w-100 btn btn-lg btn-primary" type="submit">Add Role</button>

        </form>
        </div>
    )
}
