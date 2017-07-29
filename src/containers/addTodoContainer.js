import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todoActions'

class AddTodoContainer extends Component {
    state = {todo : ''}

    render () {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label htmlFor="todo">Enter Todo : </label>
                    <input type='text' value={this.state.todo} name="todo" onChange={this.handleChange.bind(this)}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        );   
    }

    handleChange (e) {
        this.setState({[e.target.name] : e.target.value});
    }

    handleSubmit (e) {
        e.preventDefault();
        if (this.state.todo) {
            this.props.addTodo(this.state.todo);
            this.setState({todo : ''});
        }
    }
};

const mapDispatchToProps = (dispach) => ({
    addTodo : (todo) => {
        dispach (addTodo(todo))
    } 
});

export default connect(null, mapDispatchToProps) (AddTodoContainer);