
import React, {Component} from 'react';
import '../css/Feed.css';
import TweetBox from "./TweetBox";
import Post from "./Post";

class Feed extends Component {
    render(){
    return (
      <React.Fragment>
        
            <div className="feed">
        <div className="feed--header">
            <h2>Home</h2>
            </div>

            {/* Tweet Box */}
            <TweetBox
            user={this.props.user}
            posts={this.props.posts}
            onTweeting={this.props.onTweeting}

            

            />
        <div>  
        
            {this.props.posts.map((post) => {
                console.log(post);
                return (
                    <Post
                        key={post.id}
                        id={post.id}
                        post={post}
                        displayName={post.displayName} />
                );
            })}
        </div>  
        </div>  

        </React.Fragment>


    )
}
}
export default Feed

