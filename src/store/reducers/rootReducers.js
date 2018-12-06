import reducer from './usergetReducer';
import userpostReducers from './userspostReducers';
import{combineReducers} from 'redux';

const rootReducers = combineReducers({
    user:reducer,
    userPost:userpostReducers
})

export default rootReducers ;