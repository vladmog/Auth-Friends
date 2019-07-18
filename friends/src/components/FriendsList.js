import React from 'react';
import {connect} from 'react-redux';
import {Component} from 'react';
import AddForm from './AddForm';

class FriendsList extends Component {
    state ={}
    render(){
        console.log("props: ", this.props.friends)
        return(
            <div>
                <AddForm />
                {this.props.friends.map(friend => {
                    return(
                        <div key = {Math.random()}>
                            <h3>{friend.name}</h3>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
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