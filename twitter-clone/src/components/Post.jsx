import React, {Component} from 'react'
import "../css/Post.css";
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

class Post extends Component {
    render(){
    return (
        <div className="post">
        <div className="post--avatar">
            <div className="post--body">
                
                
                <div className="post--header">
                <Avatar src={this.props.post.avatar}/>    
                    <div className="post--headerText">   
                
                        <h3>
                            {this.props.post.displayName}

                            <span>

                                <VerifiedUserIcon className="post--badge" /> @
                            {this.props.post.username}

                            </span>
                        </h3>
                    </div>
                    <div className="post--headerDescription">
                        <p>{(this.props.post.postText)}</p>
                    </div>                
                </div>
                <img src={this.props.post.postImage}/>
                {/* <img src={this.props.postImage}></img> */}
                  <div className="post--footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small"/>
                    <div>
                    <FavoriteBorderIcon fontSize="small"/>
                    {this.props.post.postLikes}
                    </div>
                    <PublishIcon fontSize="small"/>
                    {this.props.post.postTimestamp}
                    
                </div>
            </div>

        </div>
        </div>
    )
}}

export default Post
