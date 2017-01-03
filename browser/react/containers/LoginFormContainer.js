import React from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import store from '../store.js';
import LoginForm from '../components/LoginForm'
import {getUserById} from '../action-creators/user'


class LoginFormContiner extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          email: '',
          password: '',
          loggedIn: false,
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    //handle change
    //store the new value in the state
    handleChange(event){
        this.setState({
            email:  event.target.value, 
            password:  event.target.value,
            loggedIn: true
        })
    }

    //handle submit
    //call dispatch to call the action with the new state value 
    handleSubmit(event){
        event.preventDefault();

        store.dispatch(getUserById(this.state.userId))

        //reset the state
        this.setState({ 
            email:'',
            password: '', 
            loggedIn: false
        })

        //fixme == redirect
        props.router.transitionTo(`/api/users/${this.state.userId}`)
    }

    render(){
        //set the input and dirty val for use here
        const email = this.state.email;
        const password = this.state.password
        const loggedIn = this.state.loggedIn;
        const warning ='';

        //implement warning if for invalid entry
        //**************************************
        // let warning = '';
        // if(!name && dirty) {
        //     warning = 'please name you list';
        // }
        
        return(
            <div>
                <LoginForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    email={email} 
                    password={password} 
                    loggedIn={loggedIn}
                    warning={warning}/>
            </div>

        )
    }
}

// LoginFormContiner = connect(mapStateToProps, mapDispatchToProps)(LoginFormContiner)

export default LoginFormContiner;

