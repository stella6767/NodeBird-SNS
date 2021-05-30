import { HYDRATE} from 'next-redux-wrapper';


const initialstate = {

    user:{
        isLoggedIn:false,
        user:null,
        signUpDate:{},
        loginData:{},
    },
    post:{
        mainPosts:[],
    },
};


export const loginAction = (data) =>{
    return{
        type: 'LOG_IN',
        data,
    }
};


export const logoutAction = () =>{
    return{
        type: 'LOG_OUT',
    }
};


//async action creator : 리덕스 사가 때


//action creator
// const changeNickname = (data) =>{
//     return{
//         type: 'LOG_IN',
//         data,
//     }
// }

// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'boogicho',
// };



//(이전상태, 액션) => 다음상태
const rootReducer = (state = initialstate, action) =>{
    switch(action.type){
        case HYDRATE:
            console.log('HYDRATE',action);
            return {...state, ...action.payload };
        case 'CHANGE_NICKNAME':
          return{
              ...state,
              user:{
                  ...state.user,
                  isLoggedIn: true,
                  user: action.data,

              }
          }
          case 'LOG_IN':
            return{
              ...state,
              user:{
                  ...state.user,
                  isLoggedIn: true,
                  user: action.data,
  
              }
            }

          case 'LOG_OUT':
          return{
            ...state,
            user:{
                ...state.user,
                isLoggedIn: false,
                user: null,

            }
          }

        default:
            return state;  
    }

};


export default rootReducer;
