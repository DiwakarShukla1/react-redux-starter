import React, {Component} from 'react';
import {connect} from 'react-redux';
import {makeLogin, loginError, loginSuccess} from '../actions/loginActions';
import {LoginForm} from '../components';
import {authService} from '../apis';

class LoginContainer extends Component {
    state = {username : '', password : ''};
    render () {
        return (
            <LoginForm {...this.props} handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
        );
    }

    handleChange (e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit (e) {
        e.preventDefault();
        if (this.state.username && this.state.password) {
            const credentials = {phone_number : this.state.username, password : this.state.password};
            this.props.makeLogin();

            authService.doLogin(credentials)
            .then((data)=> {
                this.props.loginSuccess();
            })
            .catch((error)=> {
                this.props.loginError(error.message);
            });
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    makeLogin : () => {
        dispatch(makeLogin())
    },
    loginError : (error) => {
        dispatch(loginError(error))
    },
    loginSuccess : () => {
        dispatch(loginSuccess())
    }
});

const mapStateToProps = (state) => ({
   login : state.login 
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);