import userPostService, {fetchUserServices,userPostDeleteService} from '../../services/services';

export const ActionTypes =  {
   USER_POST_DATA : 'USER_POST_DATA',
   USER_POST_SUCCESS_DATA : 'USER_POST_SUCCESS_DATA',
   USER_POST_FAIL_DATA : 'USER_POST_FAIL_DATA',

   FETCH_USERS_DATA:'FETCH_USERS_DATA',
   FETCH_USERS_SUCCESS_DATA:'FETCH_USERS_SUCCESS_DATA',
   FETCH_USERS_FAIL_DATA:'FETCH_USERS_FAIL_DATA',

  USER_POST_DELETE :'USER_POST_DELETE',
  USER_POST_DELETE_SUCCESS:'USER_POST_DELETE_SUCCESS',
  USER_POST_DELETE_FAIL:'USER_POST_DELETE_FAIL'

}
export const userPost = (data) => dispatch => {
    dispatch({type:ActionTypes.USER_POST_DATA})
    return userPostService(data)
         .then((data)=>{
             dispatch({
                 type:ActionTypes.USER_POST_SUCCESS_DATA,
                 payload:data
             })
            //  return data ;
         })
         .catch((error) => {
             dispatch({
                 type:ActionTypes.USER_POST_FAIL_DATA,
                 payload:error
             })
         })
}

export const fetchUser = () => dispatch =>{
    dispatch({type:ActionTypes.FETCH_USERS_DATA})
    return fetchUserServices()
          .then(data => {
               dispatch({
                   type:ActionTypes.FETCH_USERS_SUCCESS_DATA,
                   payload:data
               })
            //    return data ;
          }) 
          .catch((error)=>{
               dispatch({
                   type:ActionTypes.USER_POST_FAIL_DATA,
                   payload:error
               })
          })  
}

export const userPostDelete = (id) => dispatch=> {
    dispatch({type:ActionTypes.USER_POST_DELETE})
    return userPostDeleteService(id)
          .then((data)=>{
              dispatch({
                  type:ActionTypes.USER_POST_DELETE_SUCCESS,
                  payload:id
              })
            //   return data ;
          })
          .catch(error => {
              dispatch({
                   type:ActionTypes.USER_POST_FAIL_DATA,
                   payload:error
              })
          })  
}
