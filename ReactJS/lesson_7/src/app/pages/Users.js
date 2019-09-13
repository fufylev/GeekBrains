import React, { Component } from 'react';

import UsersList from '../components/UsersList';

import AddNewUser from '../components/AddNewUser';

import { connect } from 'react-redux';
import { fetchUsers } from "../actions/userActions";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      newUserFormDisplay: false,
    };
    this.closeUserForm = this.closeUserForm.bind(this);
  }
  
  closeUserForm() {
    this.setState({ newUserFormDisplay: false })
  }

  render() {
    const { users } = this.props;
    
    return (
      <div>
        <button className="btn btn-blue-grey mb-5"
        onClick={() => this.setState({ newUserFormDisplay: true })}>
          Add new User
        </button>
        { this.state.newUserFormDisplay &&
        <AddNewUser closeUserForm={ this.closeUserForm }/> }
        <UsersList users={users} />
      </div>
    );
  }
  
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.user,
  }
}

export default connect(mapStateToProps)(Users);
