import React,{Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
    render(){
        return(
            <div>
                <img src={this.props.user.thumbnail}/>
            </div>
        );
    }
}