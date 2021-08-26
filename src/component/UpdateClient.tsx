// import { Table, Button } from 'antd'
import React, { SyntheticEvent, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap';

export const UpdateClient= (props: { name: string, getClients: any[] }) => {
    // const [add, setadd] = useState('')
    // const [readonly, setreadonly] = useState('')
    // const [update, setupdate] = useState('')
    // const [setdelete, setsetdelete] = useState('')
    // //   const classes = useStyles();
    const [id, setid] = useState('')
    const [name, setrolename] = useState('')

    const [editID, seteditID] = useState('')
    const [editRolename, seteditRolename] = useState('')
    const [roleid, setappdesc] = useState('')
    const [adminId, setmethodname] = useState('')
    // const [methodname, setmethodname] = useState('')


    const submit = async (e: SyntheticEvent) => {

        console.log("inside submit of Client");
        // let methodname: Array<string> = [add,readonly,update,setdelete];
        // console.log(id)
        // console.log(rolename);
        // console.log(props.name);
        // console.log(methodname);




        ;


        //  e.preventDefault();
        const adminname = props.name
        let SocketId = sessionStorage.getItem('socket_id')
        const response = await fetch('https://localhost:4000/STUDENTCOURSE_SERVICE/FEATURE/6', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            //credentials: 'include',
            body: JSON.stringify({
                id,
                name,
                adminname,
                roleid,
                SocketId,
                adminId


            })
        });
    }



    const close = () => {
        setmenu(0)
    }

    let editDeiv = (
        <form onSubmit={submit} >
            <h1 className="h3 mb-3 fw-normal">Edit Client                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {/* <button onClick={close}>Close</button> */}
                <button onClick={close} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </h1>

            <input style={{ margin: 5 }} type="text" className="form-control" onChange={e => setid(e.target.value)} placeholder={editID} />

            <input style={{ margin: 5 }} type="text" className="form-control" onChange={e => setrolename(e.target.value)} placeholder={editRolename} />

            <input type="text" className="form-control" onChange={e => setmethodname(e.target.value)}  />
            <h6 style={{ padding: 5 }}>Permissions</h6>

            {/* <div className="form-check">
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
        </div> */}


            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    )
    const [menu, setmenu] = useState(0)

    const editRole = (methodname1: any) => {

        setmenu(1)
        console.log("menui", menu);
        editDeiv = (<p>sathya1</p>)
        seteditID(methodname1.id)
        console.log("inside editrole", methodname1.id);
        setappdesc(methodname1.appdesciption)
        seteditRolename(methodname1.appname)
        console.log('Methodname = ', methodname1)

    }

    const DeleteApp = async (id: any) => {
        console.log(id);

        let SocketId = sessionStorage.getItem('socket_id')
        const response = await fetch('https://localhost:4000/STUDENTCOURSE_SERVICE/FEATURE/6', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            //credentials: 'include',
            body: JSON.stringify({
                id,
                SocketId


            })
        });

    }

    return (
        <div>

            <div>
                <p>{menu === 1 ? <div>{editDeiv}</div> : ""}</p>
            </div>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Client Name</th>
                        <th>Admin Name</th>
                        <th>Role ID</th>
                        <th>Admin ID</th>


                    </tr>
                </thead>
                <tbody>
                    {props.getClients && props.getClients.map((row =>
                        <tr>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{(props.name === row.adminname ? "You" : row.adminname)}</td>
                            <td >{row.roleid}</td>
                            <td >{row.adminId}</td>
                            {/* <td> <Button key={row.methodname} onClick={()=>editRole(row.id)}>Edit</Button></td> */}

                            <td>{(props.name === row.adminname ? <Button key={row.methodname} onClick={() => editRole(row.id)}> Edit</Button> : "")}</td>
                            {/* <td><Button type="button" onClick={()=>DeleteApp(row.id)}  className="btn btn-danger">Delete</Button></td> */}
                            <td>{(props.name === row.adminname ? <Button type="button" onClick={() => DeleteApp(row.id)} className="btn btn-danger">Delete</Button> : "")}</td>


                        </tr>
                    ))}
                </tbody>

            </Table>


        </div>
    );
}
