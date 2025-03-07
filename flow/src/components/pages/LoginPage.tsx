import React from 'react'

import { IAuth } from '../../interface/auth.interface'
import AuthForms from '../forms/AuthForms'
import $axios from '../../http'


const LoginPage:React.FC = () => {
  const onSubmit=(formData:IAuth)=> {
    $axios.post('/login' ,{...formData})
    .then((res) =>console.log(res.data))
    .catch((err)=>console.log(err))
  }
  return (
   <AuthForms type='login' onSubmit={onSubmit}/>
  )
}

export default LoginPage