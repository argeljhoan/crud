import React from 'react'
import "./styles/UserCard.css"
const UserCard = ({user , handleClickEliminar , setUpdatinputUser, 
  handleClickShowModal,setDeletUser}
   ) => {

const handleClickEdit = () => {
  console.log("actualizar");
  setUpdatinputUser(user)
  handleClickShowModal()
}
const handleClick = () => {
  setDeletUser(user)
  handleClickEliminar()
}

  return (
    <article className='articleUserCard' key={user.id}>
    <h3>{user.first_name} {user.last_name}</h3>
   <hr/> 
    <ul className='lista_Card'>
      <div>
      <li><span>Email: </span> </li>
      <li>{user.email}</li>
      </div>
      <div>
      <li><span>Birthday: </span> </li>
      <li><i className='bx bx-gift'></i> {user.birthday}</li>
      </div>
    </ul>
    <hr/>
    <footer className='footerUsercard'>
      <button className='btn-eliminar' onClick={handleClick} ><i className='bx bx-trash'></i></button>
      <button className='btn-edit' onClick={handleClickEdit}><i className='bx bx-pencil'></i></button>
    </footer>
  </article>
  )
}

export default UserCard