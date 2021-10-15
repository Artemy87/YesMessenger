const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {users: []};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followUser: true}
                    }
                    return u;
                }),
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followUser: false}
                    }
                    return u;
                })
            }
        case SET_USERS :
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.users
                ]
            } // пользоатели пришедшие с сервера
        default:
            return state;
    }
}

export const followAction = (userId) => ({type: FOLLOW, userId});
export const unfollowAction = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAction = (users) => ({type: SET_USERS, users});

export default usersReducer;