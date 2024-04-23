import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3005";
function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users")
    console.log(response.data)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users" + userId)
    console.log(response.data)


  }

  const createUser = async (newUser) => {
    // POST: veri eklemek için
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data)

  }

  const updateUser = async (userId, updatedUser) => {
    // PUT: veri güncellemek için kullanılır.
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  }
  const deleteuserById = async (userId) => {
    const deletedetResponse = await axios.delete(`${BASE_URL}/users/${userId}`)
    console.log(deletedetResponse.data);
  }



  useEffect(() => {
    deleteuserById("53a6")
    // getAllUsers();
    // const newUser = {
    //   "username": "bilal",
    //   "password": "3636"
    // }
    // createUser(newUser)

    // updateUser("517f", {
    //   "username": "yakup",
    //   "passaword": "5555"
    // })
  }, [])

  return (
    <div>

    </div>

  )
}

export default App
