import React from 'react'
import "./styles/Message.css"
const Message = ({handleClickEliminar,delet,deleteUser,deletUser}) => {
    console.log(deletUser);

const handleClickAceptar=() =>{
    handleClickEliminar()
    deleteUser(deletUser.id)

}


  return (
    <article className={`Eliminar_article ${delet ? "active" : ""}`}>
        <div className='contenedor'>
        <h1>Eliminar Usuario</h1>
        <i onClick={handleClickEliminar} className='Eliminar__x  bx bx-x'></i>
        <p>El Usuario <span>{deletUser?.first_name} {deletUser?.last_name}</span> se ha eliminado </p>
        <button className='btn-Delete' onClick={handleClickAceptar}>Aceptar</button>
        </div>
    </article>
  )
}

export default Message