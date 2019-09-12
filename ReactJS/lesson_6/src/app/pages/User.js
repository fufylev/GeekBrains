import React, { Component } from 'react'
import axios from 'axios';

import UserProfile from '../components/User';
import Loader from "../components/Loader";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  render() {
    return (
      <div>
        {this.state.user ? <UserProfile {...this.state.user} /> : <Loader />}
      </div>
    )
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.match.params.userId}`)
      .then(response => {
        const user = response.data;
        this.setState({ user })
      })
  }
}
