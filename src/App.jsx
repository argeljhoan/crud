import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Navbar from './components/Navbar'
import UserList from './components/UserList'
import ModalForm from './components/ModalForm'
import Message from './components/Message'
const BASE_URL = "https://users-crud.academlo.tech/"
function App() {
  const [users, setUsers] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)
  const [updatinputUser, setUpdatinputUser] = useState()
  const [deletUser, setDeletUser] = useState()
  const [delet, setDelet] =  useState(false)


  const handleClickShowModal = () => {
    setIsShowModal((isShowModal) => !isShowModal)
    console.log(isShowModal);

  }

  const handleClickEliminar = () => {
    setDelet((delet) => !delet)
  

  }

  const createUser = (data) => {
    axios.post(`${BASE_URL}users/`, data)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))

  }

  const getAllUsers = () => {
    axios.get(`${BASE_URL}users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    axios.delete(`${BASE_URL}users/${id}`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  const updateUser = (data , id)=>{
    axios.patch(`${BASE_URL}users/${id}/`,data)
    .then(() => {
      getAllUsers()
      handleClickShowModal()
    })
    .catch((err) => console.log(err))

  }


  useEffect(() => {

    getAllUsers()

  }, [])
  return (
    <div className="App">

      <Navbar handleClickShowModal={handleClickShowModal} />
      <ModalForm
        createUser={createUser}
        handleClickShowModal={handleClickShowModal}
        isShowModal={isShowModal}
        updatinputUser={updatinputUser} 
        updateUser = {updateUser}
        setUpdatinputUser = {setUpdatinputUser}
        />
        <Message  handleClickEliminar ={handleClickEliminar} delet={delet} deleteUser={deleteUser} deletUser= {deletUser} />
      <UserList
        users={users}
        handleClickEliminar ={handleClickEliminar}
        setUpdatinputUser={setUpdatinputUser}
        handleClickShowModal={handleClickShowModal}
        setDeletUser= {setDeletUser}
      />
    </div>
  )
}

export default App
