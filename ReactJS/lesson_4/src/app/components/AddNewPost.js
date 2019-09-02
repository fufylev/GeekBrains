import React, { Component } from 'react';
import '../styles/addNewPost.css'

export default class AddNewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      title: '',
      body: '',
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
    if (this.state.userName.length && this.state.title.length && this.state.body.length) {
      delete this.state.display;
      this.props.addPost(this.state);
    } else {
      this.setState({display: true});
    }
  }
  
  render() {
    return (
      <div className="post">
        <div className="post-body">
          <form onSubmit={ this.handleSubmit } className="text-center border border-light p-5 m-1">
    
            <p className="h4 mb-4">Add new post</p>
    
            <input type="text" name="userName" value={ this.state.userName } onChange={ this.handleChange }
                   className="form-control mb-4" placeholder="User name:"/>
    
            <textarea name="title" value={ this.state.title } onChange={ this.handleChange }
                      className="form-control mb-4" placeholder="Post title:"/>
    
            <textarea name="body" value={ this.state.body } onChange={ this.handleChange }
                      className="form-control mb-4" placeholder="Post content:"/>
    
            <div className="row text-center">
              <div className="col-3">
                <button className="btn btn-info btn-block my-4" type="submit" value="Submit">Add post</button>
              </div>
              <div className="col-3">
                <button onClick={this.props.closePostForm} className="btn btn-info btn-block my-4">Cancel</button>
              </div>
            </div>
            {this.state.display && <p className="h4 mt-4 text text-warning">All fields are required</p>}
          </form>
        </div>
      </div>
    );
  }
}
