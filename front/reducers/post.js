//다른 정보들과 합쳐주는 데이터는 대문자로 표시,
export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '제로초',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156_1280.jpg',
        },
        {
          src: 'https://cdn.pixabay.com/photo/2021/05/24/12/18/lighthouse-6278951_1280.jpg',
        },
        {
          src: 'https://cdn.pixabay.com/photo/2021/05/23/06/39/zebra-6275284_1280.jpg',
        },
        {
          src: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F24283C3858F778CA2EFABE',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'hero',
          },
          content: '얼른 사고싶어요~',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const addPost =(data)=> ({
  type: ADD_POST_REQUEST,
  data,
});

const dummyPost = {
  id: 2,
  content: '더미 데이터',
  User: {
    id: 1,
    nickname: 'kang',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts], //앞에다 추가해야 제일 위에 올라감
        postAdded: true,
      };
      case ADD_POST_SUCCESS:
        return {
          ...state,
          mainPosts: [dummyPost, ...state.mainPosts], //앞에다 추가해야 제일 위에 올라감
          postAdded: true,
        };
        case ADD_POST_FAILURE:
            return {
              ...state,
              mainPosts: [dummyPost, ...state.mainPosts], //앞에다 추가해야 제일 위에 올라감
              postAdded: true,
            };
    default:
      return state;
  }
};

export default reducer;
