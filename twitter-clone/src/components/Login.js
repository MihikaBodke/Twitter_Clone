import React from 'react'
import "../css/Login.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Component} from 'react';
import Register from './Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { Link } from 'react-router-dom';



export default class Login extends Component {
    render(){
      return (
        <div>
          Login
            {/* {console.log(this)} */}
            <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 p-0 pt-3">
          <i className="fa fa-twitter"></i>
          <h3 className="text-center pt-3">Log in to Twitter</h3>
          <form className="login-form" action="#">
            <div className="mb-3 bg-color">
              <label>Phone, email, or username</label>
              <input type="text" name="username" ref="username" className="form-control" required/>
            </div>
            <div className="mb-3 bg-color">
              <label>Password</label>
              <input type="password" name="password" ref="password" className="form-control" required/>
            </div>
            <button type="button" className="btn btn-custom btn-lg btn-block mt-3" onClick={()=>this.props.onLogin(this.refs.username.value, this.refs.password.value)}>Log in</button>
            <div className="text-center pt-3 pb-3">
              <a href="#" className="">Forgotten password?</a> .
              {/* <button onClick=></button> */}
 
          {/* <Router reload>
              <ul>
            <li>
              <Link to="/Register" replace>Sign up for Twitter</Link>
            </li>
            </ul> 
        </Router>
        <Switch>
        <Route path="/Login" component={Login}/>
        
        <Route exact path="/Register" component={Register} replace/>
        
        </Switch> */}
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
        
      
        </div>
    )
}
}
