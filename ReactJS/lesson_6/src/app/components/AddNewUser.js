import React, { Component } from 'react';

import { addUser } from '../actions/actionCreators';

export default class AddNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      website: '',
      username: '',
      display: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      [ event.currentTarget.name ]: event.target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const { name, email, phone, website, username } = this.state;
      const id = 'new_ID';
      addUser(id, name, email, phone, website, username);
      this.props.closeUserForm();
  }
  
  render() {
    return (
      <div className="post">
        <div className="post-body">
          <form onSubmit={ this.handleSubmit } className="text-center border border-light p-5 m-1">
            
            <p className="h4 mb-4">Add new User</p>
            
            <input type="text" name="name" value={ this.state.name } onChange={ this.handleChange }
                   className="form-control mb-4" placeholder="Name:"/>
            <input type="email" name="email" value={ this.state.email } onChange={ this.handleChange }
                   className="form-control mb-4" placeholder="Email:"/>
            <input type="text" name="phone" value={ this.state.phone } onChange={ this.handleChange }
                   className="form-control mb-4" placeholder="Phone:"/>
            <input type="text" name="website" value={ this.state.website } onChange={ this.handleChange }
                   className="form-control mb-4" placeholder="Website:"/>
            <input type="text" name="username" value={ this.state.username } onChange={ this.handleChange }
                   className="form-control mb-4" placeholder="UserName:"/>
            
            <div className="row text-center">
              <div className="col-3">
                <button className="btn btn-info btn-block my-4" type="submit" value="Submit">Add User</button>
              </div>
              <div className="col-3">
                <button onClick={ this.props.closeUserForm } className="btn btn-info btn-block my-4">Cancel</button>
              </div>
            </div>
            { this.state.display && <p className="h4 mt-4 text text-warning">All fields are required</p> }
          </form>
        </div>
      </div>
    );
  }
}
