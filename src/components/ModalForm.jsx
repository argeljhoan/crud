import React, { useEffect } from 'react'
import "./styles/ModalForm.css"
import { useForm } from 'react-hook-form'

const defaultValues = {

    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: ""
}


const ModalForm = ({ 
     isShowModal,
     handleClickShowModal, 
     createUser, 
     updatinputUser,
     updateUser,
     setUpdatinputUser }) => {

        console.log("hhh"+isShowModal);
    const { register, handleSubmit, reset } = useForm()

    const submit = (data) => {
        if (updatinputUser){
            
            updateUser(data , updatinputUser.id)
        }else{
            createUser(data);
        }
        reset(defaultValues)
    }

    const handleClickClose = () => {
        handleClickShowModal()
        reset(defaultValues)
        setUpdatinputUser()
    }

    useEffect(() => {
        if (updatinputUser) {
            reset(updatinputUser)
        }

    }, [updatinputUser])



    return (
        <section className={`modalForm ${isShowModal ? "activeForm" : ""}`}>
            <form onSubmit={handleSubmit(submit)} className='modalForm__form'>
                <h3 className='modalForm__title'>{updatinputUser ? "Edit User" : "New User"} </h3>
                <i onClick={handleClickClose} className='modalForm__x bx bx-x'></i>
                <div className='modalForm__div'>
                    <label className='modalForm__label' htmlFor="">First Name</label>
                    <input className='modalForm__input' type="text" {...register("first_name")} />
                </div  >
                <div className='modalForm__div' >
                    <label className='modalForm__label' htmlFor="">Last Name</label>
                    <input className='modalForm__input' type="text"{...register("last_name")} />
                </div>
                <div className='modalForm__div'>
                    <label className='modalForm__label' htmlFor="">Email</label>
                    <input className='modalForm__input' type="email"{...register("email")} />
                </div>
                <div className='modalForm__div'>
                    <label className='modalForm__label' htmlFor="">Password</label>
                    <input className='modalForm__input' type="password" {...register("password")} />
                </div>
                <div className='modalForm__div'>
                    <label className='modalForm__label' htmlFor="">Birthday</label>
                    <input className='modalForm__input' type="date"{...register("birthday")} />
                </div>
                <button  className='modalForm__btn'>{ updatinputUser ? "Save changes" : "Add new Users"} </button>
            </form>
        </section>
    )
}

export default ModalForm