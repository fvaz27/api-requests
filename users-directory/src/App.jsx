import { useState, useEffect } from 'react'

import './App.css'


function UserCard(props){
  return (
    <div>
      <p>{props.name} -- {props.email}</p>
    </div>
  )
}


export default function App() {
 const [users, setUsers] = useState([]) 

 useEffect(()=>{
    console.log("page loaded") 
    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
        setUsers(data)
  }
  fetchUsers()
  }, [])

  
  return (
    <div>
      {
        users.map((user)=> (
          UserCard(user)
        ))
      }
    </div>
  )
}
