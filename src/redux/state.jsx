let state = {
    profileData: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 12},
            {id: 2, message: "Hello!", likesCount: 15},
            {id: 3, message: "Hi! My name is ....", likesCount: 2},
            {id: 4, message: "Hello! My name is ...", likesCount: 20},
        ],
    },
    dialogsData: {
        dialogs: [
            {id: 1, name: 'Artem'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Victor'},
            {id: 5, name: 'Oksana'},
            {id: 6, name: 'Misha'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Hello! My name is John'},
            {id: 4, message: 'You'}
        ],
    }
}

export default state;
