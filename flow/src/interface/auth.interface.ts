export interface IAuth { 
    email:string
    password:string
}
export interface AuthProps {
    type: string
    onSubmit:(formData:IAuth)=>void
}