
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import axios, {post} from 'axios';

import './App.css';
import Sidebar from './components/Sidebar.js';
import Feed from './components/Feed.js';
import Widgets from './components/Widgets.js';
import LoginRegister from './components/LoginRegister.js';




class App extends Component {
  state  = {
    
    loggedIn: false,
    user:{
   username:'',
   password:'',
   avatar: null,
   featureName:'',
   following:0,

   followers:0,
   verified:false,  
    },
    posts:[ ],
  };
  handleLogin = (username, password)=>
  {
    // console.log(username, password);

    // API CALL
    // var cors = require('cors')

// app.use(cors()); // Use this after the variable declaration
let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
// headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
headers.append('Origin','http://localhost:3000');

let url = `http://127.0.0.1:8000/user-login/username=${username}/password=${password}/`;
    fetch(url, {
      mode:'cors',
      method: "post",
      body: JSON.stringify({
        username: username,
          password: password,

      }),
    })
    .then((response) => response.json(),
    
    )
    
    
    .then((data) => 
    this.setState({ user: data, loggedIn:true },
    ()=>{this.fetchPosts(this.state.user.username)}

    )

    )
    
    // .catch((error) => console.log(error));
    // SET STATE
    // this.setState({username: username})
    // this.setState({loggedIn: true})
    
  }
 
fetchPosts=(username=this.state.user.username)=>{
  console.log(this.state.user)
  let url = `http://127.0.0.1:8000/post-list/username=${username}/`;
  console.log(url+"now");

    fetch(url, {
      mode:'cors',
      method: "get",
    })
    .then((response) => response.json())
    .then((data) => 
    this.setState({ posts: data },
      ()=>{
        console.log(this.state.posts);
      }
      )
    )

}


  handleRegister=(username, featureName,  password, avatar)=> {
 let uploadData = new FormData();
 console.log(avatar)


// var base64= btoa(uint8ToString(avatar));
  uploadData.append("avatar"  , avatar);
    uploadData.append("username",username);
    uploadData.append("displayName",featureName);
    uploadData.append("password",password);
    uploadData.append("followers",0);
    uploadData.append("following",0);
    uploadData.append("verified",false);
    
    let url = "http://127.0.0.1:8000/user-register/";
   
    axios.post(url, uploadData, {
      // headers: {
      //   // 'content-type': 'multipart/form-data'
      // }
    })
        .then(res => {
          console.log(res.data);
          this.setState({loggedIn:true});
          this.setState({username:username});


        })
        .catch(err => console.log(err))
      }






handleTweeting=(text, image)=>{
        console.log(text, image, this.state.user.username);
        let url = `http://127.0.0.1:8000/post-insert/ `;
        let uploadData = new FormData();
        // console.log(avatar)
       
      //  const id=1000;
       // var base64= btoa(uint8ToString(avatar));
      //  uploadData.append("postID",id);

       uploadData.append("username",this.state.user.username);
       uploadData.append("postImage",image);
      //  uploadData.append("postTimestamp",Date.now());
       uploadData.append("postText"  , text);
           uploadData.append("postLikes",0);
           uploadData.append("displayName",this.state.user.displayName);
           uploadData.append("verified",this.state.user.verified);
           uploadData.append("avatar",this.state.user.avatar) ;

          
           axios.post(url, uploadData, {
             // headers: {
             //   // 'content-type': 'multipart/form-data'
             // }
           })
               .then(res => {
                 console.log(res.data);
                 this.fetchPosts();
                //  this.setState({loggedIn:true});
                //  this.setState({username:username});
       
       
               })
               .catch(err => console.log(err))
            //  }
       
    // fetch(url, {
    //   // mode:'cors',
    //   method: "post",
    //   body: JSON.stringify({
    //     // username: this.state.user.username,
    //     postText: text,
    //     // postImage: image,

    //   }),
    // })
    // .then((response) => response.json(),
    
    // )
    
    
    // // .then((data) => 
    // // this.setState({ post: data, loggedIn:true },
    // // ()=>{this.fetchPosts(this.state.user.username)}

    // // )

    // // )
    

      }
  render(){
  return (
    <div className="app">
      {

      !this.state.loggedIn 
      &&
       <LoginRegister
        onLogin = {this.handleLogin}
        onRegister = {this.handleRegister}
      
      />
      }
      {/* {

this.state.loggedIn 
&&
        this.fetchPosts(this.state.user.username)
} */}
      {this.state.loggedIn && this.state.username}
      
      {this.state.loggedIn && <Sidebar/>}
      
      {this.state.loggedIn && <Feed 
            user={this.state.user}
            posts={this.state.posts}
            onTweeting={this.handleTweeting}

        // user= {this.state.username}
      />}

      {this.state.loggedIn && <Widgets/>}




    </div>
  );
}}

export default App;
