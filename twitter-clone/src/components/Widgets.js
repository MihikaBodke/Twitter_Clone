import React, { Component } from 'react'
import "../css/Widgets.css"
import UserWidget from './UserWidget';
export class Widgets extends Component {
    state = {
        users:[],
    }
    render() {
        return (
            <div className="Widgets">
                <h4 style={{"font-weight":"900"}}>You might want to follow</h4>
                {this.props.recommendToFollow.map((user) => {
                console.log(user);
                return (
                    <UserWidget
                        key={user.id}
                        id={user.id}
                        user={user}
                        onFollowing={this.props.onFollowing}
                        />
                );
            })}
               
            </div>
        )
    }
}

export default Widgets
