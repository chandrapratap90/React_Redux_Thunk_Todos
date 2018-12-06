import axios from 'axios';
import endPoint from './endPoint';

const userPostService = (data) => {
      return  axios({
                  url:endPoint.userpost(),
                  method:"post",
                  data
              })
             .then(response => {
                 return ( (response && response.data) || null)
             }) 
             .catch(error => (error)) 
} 

export const fetchUserServices = () => {
      return axios
            .get(endPoint.userget())
            .then( response =>{
                return( (response && response.data) || null)
            })
            .catch( error => error)
}

export const userPostDeleteService = (id) =>{
         return axios({
            url:endPoint.userPostDelete(id),
             method:'DELETE',
             id
         })
         .then(response =>{
             return ((response && response.data) || null)
             
         })
         .catch(error => error)
}

export default userPostService ;
