import React from 'react'
import "../css/Login.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Component} from 'react';

export default class Register extends Component {
  state = { 
    'image':null
  }
  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

    render(){
      return (
        <div>
            Register
            <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 p-0 pt-3">
          <i className="fa fa-twitter"></i>
          <h3 className="text-center pt-3">Log in to Twitter</h3>
          <form className="login-form" action="#" encType="multipart/form-data">
            <div className="mb-3 bg-color">
              <label>Phone, email, or username</label>
              <input type="text" name="username" ref="username" className="form-control" required/>
            </div>
            <div className="mb-3 bg-color">
            <label>Display Name:</label>
              <input type="text" name="displayName" ref="displayName" className="form-control" required/>
            </div>
            <div className="mb-3 bg-color">
              <label>Password</label>
              <input type="password" name="password" ref="password" className="form-control" required/>
            </div>
            <div className="mb-3 bg-color">
              <label>Avatar</label>
              <input type="file" name="avatar" ref="avatar" className="form-control" required  onChange={this.handleImageChange}/>
            </div>
            
            <button type="button" className="btn btn-custom btn-lg btn-block mt-3" onClick={()=>this.props.onRegister(this.refs.username.value,this.refs.displayName.value ,this.refs.password.value,this.state.image)}>Register</button>
            <div className="text-center pt-3 pb-3">
              <a href="#" className="">Forgotten password?</a> . 
              <a href="#" className="">Sign up for Twitter</a>
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
