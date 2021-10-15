const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 12},
        {id: 2, message: "Hello!", likesCount: 15},
        {id: 3, message: "Hi! My name is ....", likesCount: 10},
    ],
    newPostText: '',
};

const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT :
            return  {
                ...state,
                newPostText: action.newText,
            };
        case ADD_POST :
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: 4, message: state.newPostText, likesCount: 3}
                ],
                newPostText: '',
            };

        default:
            return state;
    }
}

export const addPostCreator = () => (
    { type: ADD_POST });
export const updateNewPostTextCreator = (text) => (
    { type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;