const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';


let initialState = {
    dialogs: [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Oksana'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hello! My name is John. Hello! My name is John. Hello! My name is John. Hello! My name is John.'},
        {id: 4, message: 'You'},
    ],
    newMessageText: '',
};

const dialogsReducer = (state=initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :
            return  {
                ...state,
                newMessageBody: action.body,
            };

        case SEND_MESSAGE :
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {id: 5, message: state.newMessageBody},
                ],
                newMessageBody: ''
            };

        default:
            return state;
    }
}

export const sendMessageCreator = () => (
    { type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => (
    { type: UPDATE_NEW_MESSAGE_BODY, body: text });

export default dialogsReducer;
