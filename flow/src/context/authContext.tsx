import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { IAuthContext } from "../interface/auth-context.interface"
import { IUser } from "../interface/user.interface"
import $axios from "../http"

const AuthContext=createContext<IAuthContext>({} as IAuthContext )


export const AuthProvider = ({children}: {children:React.ReactNode}) => {
    const [user, setUser]=useState<IUser>({} as IUser)
    const [loading, setLoading] =useState<boolean>(true)

    useEffect(() => {
        $axios.get('/refresh')
        .then((res)=> {
            setUser(res.data.user)
            setLoading(false)
         })
        .catch(error =>{
            console.log(error)
            setLoading(false)
        })    
    },[])
    const logout = useCallback(() => {
        $axios.post('/logout')
        .then((res) => {
           setUser({} as IUser);
        })
        .catch((err) => console.log(err));
      }, []);

    return (
        <AuthContext.Provider value={{user,loading, logout}}>
            {children}
        </AuthContext.Provider>
    )

}
export const useAuthContext = () => useContext(AuthContext)