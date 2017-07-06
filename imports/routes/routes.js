import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';


import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

// Create and import basic version of Login
// Create the route for "/" and render Login



const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

// This method makes it so if a user is logged in but tries to access the login page,
// it redirects them to their profile
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/links');
  }
};

const onEnterPrivatePage = () => {
    if (!Meteor.userId()) {
      browserHistory.replace('/');
    }
};

export const onAuthChange = (isAuthenticated) => {

  const pathname = browserHistory.getCurrentLocation().pathname;

  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  // if on unauthenticatedPage and logged in, redirect to /links
    // browserHistory.push
  // if on authenticated page and not logged in, redirect to '/'
    // browserHistory.push
  // no else

  if (isAuthenticated) {
    if(isUnauthenticatedPage){
      browserHistory.replace('/links');
    }
  } else {
    if(isAuthenticatedPage){
      browserHistory.replace('/')
    }
  }

  console.log('isAuthenticated', isAuthenticated);

}

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
    <Route path="*" component={NotFound}/>
  </Router>
);
