export const initialState = {
    isLoggedIn:false,
    me:null,
    signUpDate:{},
    loginData:{},
}


export const loginRequestAction = (data) =>{
    return{
        type: 'LOG_IN_REQUEST',
        data,
    }
};

export const loginRequestSuccess = () =>{
    return{
        type: 'LOG_IN_REQUEST',
    }
};


export const loginRequestFailure = () =>{
    return{
        type: 'LOG_IN_REQUEST',
    }
};



///ㅌ


export const logoutRequestAction = () =>{
    return{
        type: 'LOG_OUT_REQUEST',
    }
};


const reducer = (state=initialState, action)=>{
    switch(action.type){

        case 'LOG_IN':
            return{
                  ...state,
                  isLoggedIn: true,
                  me: action.data,
  
              
            }

          case 'LOG_OUT':
          return{
                ...state,
                isLoggedIn: false,
                me: null,

            
          }

        default:
            return state;
    }

};

export default reducer;