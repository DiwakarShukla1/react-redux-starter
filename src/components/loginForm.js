import React, {Component} from 'react';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="username">Username : </label>
                <input name="username" onChange={props.handleChange}/>
            </div>
            <div>
                <label htmlFor="password">Password : </label>
                <input name="password" type="password" onChange={props.handleChange}/>
            </div>
            <div>{props.login.status}</div>
            <button type='submit'>Login</button>
        </form>
    );
};

const HOC = (WrapComponent) => {
    return class Loader extends Component {
        state = {loading : true};

        componentWillMount () {
            setTimeout(()=> {
                this.setState({loading : false});
            }, 1000);
        }

        render () {
            const message = this.state.loading ? 'loading' : <WrapComponent {...this.props}/>;

            return (
                <div>
                    {message}
                </div>
            )
        }
    }
};

export default HOC(LoginForm);