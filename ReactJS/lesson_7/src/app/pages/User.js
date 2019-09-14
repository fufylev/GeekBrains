import React, { Component } from 'react'

import UserProfile from '../components/User';
import Loader from "../components/Loader";
import { connect } from "react-redux";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  render() {
    return (
      <div>
        {this.props.user ? <UserProfile {...this.props.user} /> : <Loader />}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user.user.find(user => user.id === +ownProps.match.params.userId)
  }
}

export default connect(mapStateToProps)(User);
