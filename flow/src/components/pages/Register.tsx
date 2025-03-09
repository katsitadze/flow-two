import React from 'react'
import { IAuth } from '../../interface/auth.interface'
import AuthForms from '../forms/AuthForms'
import $axios from '../../http'

const Register:React.FC = () => {
  
    const onSubmit= async (formData:IAuth)=> {
    
     try{
      const res=await $axios.post('/registration',{...formData})
      console.log(res.data);
     } catch (error){
      console.log(error);
      
     }
    }
    return (
     <AuthForms type='register' onSubmit={onSubmit}/>
    )
  
}

export default Register; 