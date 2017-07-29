import React, {Component} from 'react';
import {connect} from 'react-redux';

const TodoListContainer = (props) => {
    const todoList = props.todos.map(data=> <li key={data.id}>{data.text}</li>);

    return (
        <div>
            <ul>
                {todoList}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos : state.todos
});

export default connect(mapStateToProps)(TodoListContainer);