import React, { Component } from 'react'
import "../css/UserWidget.css";
import { Avatar, Button} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
export class UserWidget extends Component {
    render() {
        return (
            <div className="widget">
            <div className="widget--avatar">
                <div className="widget--body">
                    
                    
                    <div className="widget--header">
                    <Avatar src={this.props.user.avatar}/>    
                        <div className="widget--headerText">   
                    
                            <h3>
                                {this.props.user.displayName}
    
                                <span>
    
                                    <VerifiedUserIcon className="widget--badge" /> @
                                {this.props.user.username}
    
                                </span>
                            </h3>
                        </div>
                    </div>
                    <Button className="userWidget--followButton" onClick={()=>
                    this.props.onFollowing(this.props.user.username)
                            // console.log(this.props)
}>Follow</Button>
                </div>
    
            </div>
            </div>
        )
    }
}

export default UserWidget
