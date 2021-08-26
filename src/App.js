import logo from './logo.svg';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import './App.css';
import UploadPage from './component/UploadPage';
import PrimarySearchAppBar from './component/topAppBar';
import { Login } from './component/Login';
import { Nav } from './component/Nav';
import { Home } from './component/Home';
import { Register } from './component/Register';
import React, { useEffect, useState } from 'react';
import { Adminfun } from './component/Adminfun';
import GetRoles from './component/RoleView';
import { AddClient } from './component/AddClient';
import  io  from 'socket.io-client';
import { App_add } from './component/App_add';
import { Addfeature } from './component/Addfeature';
import { UpdateApp } from './component/UpdateApp';
import { UpdateFeature } from './component/UpdateFeature';
import { UpdateClient } from './component/UpdateClient';

let socket = io.connect('https://localhost:4000');
function App() {
  const [getClients, setgetClients] = useState('')
  const [getFeature, setgetFeature] = useState('')
const [getApps, setgetApps] = useState('')
  const [getRoles, setgetRoles] = useState('')
  const [name, setName] = useState('');

  const [getAdmin, setgetAdmin] = useState('')
  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:4003/component/user', {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        const content = await response.json();

        setName(content.name);
      }
    )();
  });

  useEffect(() => {
    async function getRoles() {
    try {
     
        const reqUrl1 = 'http://localhost:4003/component/getRoles'
        const response11 = await fetch(reqUrl1)
        const resJSON1 = await response11.json()
        setgetRoles(resJSON1)
      
    } catch {

    }}
    getRoles()
  }, [])

  useEffect(() => {
    async function getAdmins() {
    try {
     
        const reqUrl3 = 'http://localhost:4003/component/getadmin'
        const response13 = await fetch(reqUrl3)
        const resJSON3 = await response13.json()
        setgetAdmin(resJSON3)
      
    } catch {

    }}
    getAdmins()
  }, [])



  
  useEffect(() => {
    async function getClient() {
    try {
     
        const reqUrl2 = 'http://localhost:4003/component/getClient'
        const response12 = await fetch(reqUrl2)
        const resJSON2 = await response12.json()
        setgetClients(resJSON2)
      
    } catch {

    }}
    getClient()
  }, [])


  useEffect(() => {
    async function getApps() {
    try {
     
        const reqUrl = 'http://localhost:4003/app-data/getApps'
        const response1 = await fetch(reqUrl)
        const resJSON = await response1.json()
        setgetApps(resJSON)
      
    } catch {

    }}
    getApps()
  }, [])

  
  useEffect(() => {
    async function getFeatures() {
    try {
     
        const reqUrl = 'http://localhost:4003/app-data/getfeatures'
        const response1 = await fetch(reqUrl)
        const resJSON = await response1.json()
        setgetFeature(resJSON)
      
    } catch {

    }}
    getFeatures()
  }, [])

useEffect(() => {
  console.log('inside cons of websockets');

  //FIRST ACTION hapens wheN the page opens firSt time , this is one time activity 
  socket.on('connection', function (socket) {
    console.log('socket has been connected');
    console.log(socket)
  });

  //Thi seven Is caLled whEn  the server sends the data back to the client
  socket.on('successResponseFromServer', function (data) {
    //evalaute the requestGuid from the dictionary and then match and then show themessgae in console
    console.log(data);
    alert(`requested completed and socket id is ${data.SocketId}`)
    //for find you can use 'Filter' 
    //remove the item from the dictionary /array
  });

  
    //this is the event which is called when the server register the socket id and sends back the socket id
    socket.on('socketIdFromServer', function (data) {
      console.log(data)
      sessionStorage.setItem('socket_id', data.socket_id);
    });
}, [])



  return (

    <div>
      <BrowserRouter>
        <Nav name={name} setName={setName} />
        <main className="form-signin">



          {/* <Link to="/admin/upload">About</Link> */}
          {/* <PrimarySearchAppBar /> */}


          <Route exact path="/" component={() => <Home name={name} />} />
          <Route exact path="/login" component={() => <Login  setName={setName} />} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/admin/upload" component={UploadPage} />
          <Route exact path="/addclient" component={() => <Adminfun name={name} />} />
          <Route exact path="/admin" component={() => <AddClient name={name} getRoles={getRoles} getAdmin={getAdmin} />} />
          <Route exact path="/viewrole" component={() => <GetRoles name={name} getRoles={getRoles} />} />
          <Route exact path="/addapp" component={() => <App_add name={name} getRoles={getRoles} />} />
          <Route exact path="/addfeature" component={() => <Addfeature name={name} getRoles={getRoles} getApps={getApps}/>} />
          <Route exact path="/updateapp" component={() => <UpdateApp name={name} getApps={getApps} />} />
          <Route exact path="/updatefeature" component={() => <UpdateFeature name={name} getFeature={getFeature} />} />
          <Route exact path="/updateclient" component={() => <UpdateClient name={name} getClients={getClients} />} />
        </main>
      </BrowserRouter>
    </div>




  );
}

export default App;
