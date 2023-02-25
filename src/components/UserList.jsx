import React from 'react'
import UserCard from './UserCard'
import "./styles/UserList.css"
const UserList = ( {users, handleClickEliminar , setUpdatinputUser, handleClickShowModal,setDeletUser}) => {
  return (
    <section className='userList'>
        {
          users.map(user =>  <UserCard key={user.id} user={user} handleClickEliminar={handleClickEliminar} 
            setUpdatinputUser = {setUpdatinputUser}
             handleClickShowModal = {handleClickShowModal}
             setDeletUser= {setDeletUser} />
        
          )
        }
      </section>
  )
}

export default UserList