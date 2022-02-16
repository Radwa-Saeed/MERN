import './App.css';
import React, { useState ,useEffect} from 'react';
import axios from "axios"

function App() {
  const [Users, setUsers] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/getUsers").then((response)=>{
      //console.log(response)
      setUsers(response.data.data)
    });
  }, []);
  //const data = Array.from(Users)

  const [Name, setName] = useState("")
  const [Age, setAge] = useState(0)
  const [Email, setEmail] = useState("")
  const add=()=>{
    console.log({"Name":Name,"Age":Age,"Email":Email})
    axios.post("http://localhost:3001/createUser",{Name,Age,Email})
  }


  return (
    <div className="App">
      <h1>CRUD MERN APP</h1>

      <label>Name</label>
      <input type="text" onChange={(event)=>setName(event.target.value)}></input>

      <label>Age</label>
      <input type="number" onChange={(event)=>setAge(event.target.value)}></input>

      <label>Email</label>
      <input type="email" onChange={(event)=>setEmail(event.target.value)}></input>

      <button type='button' onClick={add}>Add User</button>
      
      <h2>Users</h2>
      <div class="users">
        {Users.map((user)=>{
          return (
            <div >
              <h3>Name:{user.Name}</h3>
              <h3>Age:{user.Age}</h3>
              <h3>Email:{user.Email}</h3>
            </div>);
          })}
      </div>
    </div>
  );
}

export default App;
