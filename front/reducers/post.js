

//다른 정보들과 합쳐주는 데이터는 대문자로 표시, 
export const initialState = {
    mainPosts: [{
        id: 1,
        User:{
            id: 1,
            nickname: '제로초',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images:[{
            src: 'https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156_1280.jpg',
        },{
            src: 'https://cdn.pixabay.com/photo/2021/05/24/12/18/lighthouse-6278951_1280.jpg',
        },
    {
        src: 'https://cdn.pixabay.com/photo/2021/05/23/06/39/zebra-6275284_1280.jpg',
    }],
    Comments: [{
       User:{
           nickname:'hero',

       } ,
       content: '얼른 사고싶어요~',          
    }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';

export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id:2,
    content:'더미 데이터',
    User:{
        id:1,
        nickname:'kang',
    },
    Images:[],
    Comments:[],
};



const reducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],  //앞에다 추가해야 제일 위에 올라감
                postAdded: true,
            }


        default:
            return state;
    }

};

export default reducer;