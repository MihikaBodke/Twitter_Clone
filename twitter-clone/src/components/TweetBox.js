import React, {Component} from 'react'
import "../css/TweetBox.css";
import { Avatar, Button} from "@material-ui/core";
 class TweetBox extends Component{
    state = {
        postText:"",
        postImage:"",
        clicked:false,

    }
    handleTextInputChange=()=>{
        console.log(this.refs.postText.value);
        // this.setState({postText:this.refs.postText.value, postImage:this.refs.postImage.value});
    }
    getAvatarSource=()=>{
         
        let src=(this.props.user.avatar);
        return src;
    }
    getText=()=>{

                   return "What's happening "+this.props.user.displayName+"?";
                    
    }
    makeEmpty=()=>{
        // this.setState({postText:'', postImage:''})        
        // this.refs.postText='';
         document.getElementsByName("postText").value="";
         console.log( document.getElementsByName("postText").value)
         console.log( document.getElementsByName("postText").value)
        //  this.setState({});
        
    }
    render(){
    return (
        <div className="tweetBox">
            <form action="#">
                <div className="tweetBox--input">

            <Avatar src={this.getAvatarSource()}/>
            
               <input 
                 ref="postText"
                 type="text"
                 defaultValue=""
                 placeholder={this.getText()}
                 name="postText"
                 required
                //  value={this.state.postText}
                 onChange={(this.handleTextInputChange=()=>{
        console.log(this.refs.postText.value);
        this.setState({postText:this.refs.postText.value, postImage:this.refs.postImage.value});

                })}
                 />
               </div>
                <input 
                ref="postImage"
                type="text"
                defaultValue=""
                className="tweetBox--imageInput"
                placeholder="Optional: Enter image URL"
                //  value={this.state.postImage}
                 name="postImage"            
                 onChange={this.handleInputChange=()=>{
                    this.setState({postText:this.refs.postText.value, postImage:this.refs.postImage.value});

                 }}
                 />


            {/* {console.log(this.refs.postText.defaultValue )} */}
            <Button className="tweetBox--tweetButton" onClick={()=>this.props.onTweeting(this.state.postText, this.state.postImage)
            
}>Tweet</Button>
            </form>
        </div>
    )
}
}   
export default TweetBox;