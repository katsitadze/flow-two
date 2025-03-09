
import { AuthProvider } from './context/authContext'
import Router from './routes/Router'

const  App:React.FC = () => {
  

  return (
    <>
      <AuthProvider>
           <Router/>
      </AuthProvider>
 
    </>
  )
}

export default App
