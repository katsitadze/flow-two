import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL;


const $axios =axios.create({
withCredentials:true,
baseURL: API_URL

})
//ACCESTOKEN
$axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})
//REFRESHTOKEN
$axios.interceptors.response.use(
    (config) => config,
   async (error) => {
        const originalResponse=error.config
          if(error.response.status === 401 && 
            error.config &&
            !error.config_isRetry
          ){
            originalResponse._isRetry =true;
            try{
               const response = await axios.get(`${API_URL}/refresh` ,{
                withCredentials:true,
               })
               localStorage.setItem('token',response.data.accessToken)

            }  catch (error) {
                    console.log('unavtorized');
                    
            }
          }
    }
)
export default  $axios ;