import { HYDRATE} from 'next-redux-wrapper';
import user from './user';
import post from './post';
import { combineReducers } from 'redux';


//async action creator : 리덕스 사가 때


//(이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
    index: (state = {}, action) =>{ //서버사이드 랜더링을 위해서
        switch(action.type){
            case HYDRATE:
                console.log('HYDRATE',action);
                return {...state, ...action.payload };
            default:
                return state;  
        }
    },

    user,
    post,
});




export default rootReducer;
