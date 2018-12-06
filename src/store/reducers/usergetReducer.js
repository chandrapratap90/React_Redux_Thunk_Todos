import {ActionTypes} from '../action/index'
const initialState = {
      fetchusers:
          {
             isLoading:false,
             error:null,
             data:[] 
          }
       
    
}

export const reducer = ( state = initialState, action) => {
     switch(action.type){
           case ActionTypes.FETCH_USERS_DATA :
              return {
                  ...state ,
                  fetchusers:{...state.fetchusers,isLoading:true}
              }
              case ActionTypes.FETCH_USERS_SUCCESS_DATA :
               return {
                  ...state,
                  fetchusers:{...state.fetchusers, isLoading:false,data:action.payload}
               }
               case ActionTypes.FETCH_USERS_FAIL_DATA :
                return {
                    ...state,
                    fetchusers:{...state.fetchusers,isLoading:false,error:action.payload}
                }
               
                case ActionTypes.USER_POST_DELETE:
                     return {
                         ...state,
                         fetchusers:{...state.fetchusers,isLoading:true}
                     }
                case ActionTypes.USER_POST_DELETE_SUCCESS:
                    const updatepost = state.fetchusers.data.filter( user => user.id !== action.payload)
                    return{
                        ...state,
                        fetchusers:{...state.fetchusers, isLoading:false,data:updatepost}
                    }
                    
                 case ActionTypes.USER_POST_DELETE_FAIL :
                return {
                    ...state,
                    fetchusers:{...state.fetchusers,isLoading:false,error:action.payload}
                }
                    


         default: {
            return state ;
         }
     }
    
}

export default reducer ;