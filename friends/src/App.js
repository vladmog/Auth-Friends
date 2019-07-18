import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Link, Route} from 'react-router-dom';
import Form from './components/Form';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">
      <h1>App isn't Broken</h1>
      <Link to = "/form">Form</Link>
      <Route path = "/form" component = {Form} />
			<PrivateRoute path="/friendslist" component={FriendsList} />
    </div>
  )
}
function mapStateToProps(state){
  return {}
}
export default connect(mapStateToProps)(App)