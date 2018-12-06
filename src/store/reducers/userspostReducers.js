import {ActionTypes} from '../action'
const initialState = {
    userpost:{
        isLoading:false,
        error:null,
        data:[]
        
    }
}
const userpostReducers = ( state = initialState , action) =>{
        switch(action.type) {
            case ActionTypes.USER_POST_DATA:
               return {
                   ...state,
                   userpost:{...state.userpost,isLoading: true}
               } 
               case ActionTypes.USER_POST_SUCCESS_DATA:
                 return {
                     ...state,
                     userpost:{...state.userpost, isLoading:false,data:action.payload}
                    }
                 case ActionTypes.USER_POST_FAIL_DATA :
                   return {
                       ...state,
                       userpost:{...state.userpost, isLoading:false, error:action.payload} 
                   }   
            default: {
                return state
            }
             
        }
}
export default userpostReducers ;


