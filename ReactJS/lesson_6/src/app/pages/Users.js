import React, { Component } from 'react';

import UsersList from '../components/UsersList';

import { getUsers } from '../actions/actionCreators';
import UserStore from '../stores/userStore';
import AddNewUser from '../components/AddNewUser';


export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      newUserFormDisplay: false,
    };
    this.onUserChange = this.onUserChange.bind(this);
    this.closeUserForm = this.closeUserForm.bind(this);
  }
  
  onUserChange() {
    const users = UserStore.users;
    this.setState({ users })
  }
  closeUserForm() {
    this.setState({ newUserFormDisplay: false })
  }

  render() {
    return (
      <div>
        <button className="btn btn-blue-grey mb-5" 
        onClick={() => this.setState({ newUserFormDisplay: true })}>
          Add new User
        </button>
        { this.state.newUserFormDisplay &&
        <AddNewUser closeUserForm={ this.closeUserForm }/> }
        <UsersList users={this.state.users} />
      </div>
    );
  }
  
  componentDidMount() {
    getUsers();
    UserStore.on('change', this.onUserChange);
  }

  componentWillUnmount() {
    UserStore.removeListener('change',this.onUserChange)
  }
}
