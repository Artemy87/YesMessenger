import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";
import {followAction,
    setCurrentPageAction,
    setTotalUsersCountAction,
    setUsersAction,
    unfollowAction
} from "../../redux/users-reducer";


class UsersAPIComponent extends React.Component {

    baseURL = 'https://social-network.samuraijs.com/api/1.0';

    componentDidMount() {
        axios.get(`${this.baseURL}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`${this.baseURL}/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
            });
    }

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAction(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAction(totalCount))

        }
    }
};

export default connect(mapStateToProps, mapDispatchToProp)(UsersAPIComponent);
