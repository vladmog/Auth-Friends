import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';

class FriendsList extends Component {
    state ={}
    render(){
        console.log("props: ", this.props.friends)
        return(
            <div>
                {this.props.friends.map(friend => {
                    return(
                        <div key = {Math.random()}>
                            <h3>{friend.name}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        friends: state.friends
    }
}

export default connect (mapStateToProps, {})(FriendsList)