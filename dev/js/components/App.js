import React,{Component} from 'react';
require('../../scss/style.scss');
import UserList from '../containers/user-list';


export default class App extends Component{
    render(){
        return(
            <div>
                <h2>Username List:</h2>
                <UserList />
                <hr/>
                <h2>User Details:</h2>
            </div>
        );
    }
}