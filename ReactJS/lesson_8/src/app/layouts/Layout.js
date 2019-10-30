import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Users from '../pages/Users';
import User from '../pages/User';
/*import Posts from '../pages/Posts';
import Post from '../pages/Post';
import Comments from '../pages/Comments';
import Comment from '../pages/Comment';*/
import PageNotFound from '../pages/PageNotFound';
import Footer from "../components/Footer";
import Header from "../components/Header";

export default class Layout extends Component {
  render() {
    return (
      <div className="">
        <Header />
        
        <div className="row">
          <div className="col-md-12">
            <main className="container">
              <Switch>
                <Route exact path="/" component={ Main }/>
                <Route exact path="/users" component={ Users }/>
                <Route path="/users/:userId" component={ User }/>
                <Route path="*" component={ PageNotFound }/>
              </Switch>
            </main>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }
}
