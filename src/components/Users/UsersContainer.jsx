import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAction, setUsersAction, unfollowAction} from "../../redux/users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
};

const mapDispatchToProp = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAction(userId)) // диспатчим результат работы followAction(т.е. ActionCreator)
        },
        unfollow: (userId) => {
            dispatch(unfollowAction(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAction(users))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProp)(Users);
