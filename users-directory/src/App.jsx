import { useState, useEffect } from 'react'

import './App.css'





export default function App() {
 const [users, setUsers] = useState([]) 

 useEffect(()=>{
    console.log("page loaded") 
    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
        setUsers(users)
  }
  fetchUsers()
  }, [])

  
  return (
    <div>

    </div>
  )
}
