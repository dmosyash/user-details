import React, { Component } from 'react';
import UserCard from './UserCard';
import { getUsers } from './../services/apiService';
import './../App.css';

/**
 * @name UserDetails
 * @description This components shows all the users and their details
 * It is a class component, It has a filter button and a user list.
 * After this component mounted, API is called to fetch user's list.
 * Then it is shown by the help of UserCard component.
 */

class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            filteredUsers: [],
            buttonText: 'Filter'
        };
        this.users = [];
    }

    componentDidMount() {
        getUsers().then(res => {
            this.users = res;
            this.setState({ loading: false, filteredUsers: res });
        })
    }

    filterList = () => {
        if (this.state.buttonText === 'Filter') {
            const filtered = this.users.filter(user => {
                const fullname = `${user.firstName} ${user.lastName}`;
                return user.age >= 20 && user.age < 30 && fullname.length >= 10;
            });
            this.setState({ filteredUsers: filtered, buttonText: 'Reset' });
        } else {
            this.setState({ filteredUsers: this.users, buttonText: 'Filter' });
        }
    }

    userList = () => this.state.filteredUsers.map(user => <UserCard user={user} />);

    loading = () => (<div style={{ fontSize: '25px', textAlign: 'center' }}>Getting Users...</div>);

    render() {
        return (
            <div>
                <button className="btn-input btn" onClick={this.filterList}>{this.state.buttonText}</button>
                {
                    this.state.filteredUsers.length ? this.userList() : this.loading()
                }
            </div>
        );
    }
}

export default UserDetails;
