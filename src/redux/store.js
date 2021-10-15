import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 12},
                {id: 2, message: "Hello!", likesCount: 15},
                {id: 3, message: "Hi! My name is ....", likesCount: 10},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
            newMessageBody: '',
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Oleg'},
                {id: 2, name: 'Dmitriy'},
                {id: 3, name: 'Nikita'},
            ],
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // патерн observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
