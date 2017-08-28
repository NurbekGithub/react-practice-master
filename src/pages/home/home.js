import React from 'react';
import Input from '../../components/ui/input/index';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';

class HomePage extends React.Component {

    static path = '/';

    constructor(props) {
        super(props);
    
        this.state = {
            todoName: '',
            todos: [
                {
                    id: 1,
                    name: 'Todo 1'
                }
            ],
            error: ''
        };

        bindAll(this, ['addTodo', 'renderTodos', 'inputOnChange']);
    }

    addTodo() {
        if (this.state.todoName === '') {
            this.setState({ error: 'The input cannot be empty' });
            return;
        }

        const todos = this.state.todos;
        const id = this.state.todos[this.state.todos.length - 1] + 1;
        const name = this.state.todoName;
        todos.push({ id, name });
        this.setState({ todos });
        this.setState({ todoName: '', error: '' });
    }

    inputOnChange(value) {
        this.setState({ todoName: value, error: '' });
    }

    deleteHandler(idx) {
        const todos = this.state.todos;
        todos.splice(idx, 1);
        this.setState({ todos });
    }

    renderTodos(item, idx) {
        return (
            <li key={ idx }> { item.name } <button className='btn btn-danger' onClick={this.deleteHandler.bind(this, idx)}>X</button></li>
        );
    }

    render() {
        const { todoName, todos, error } = this.state;
        return (
            <div className='row'>
                <div className='col-sm-4'>
                    <ul>
                        { todos.map(this.renderTodos) }
                    </ul>
                </div>
                <div className='col-sm-4'>
                    <Input value={ todoName }
                           onChange={ this.inputOnChange }
                           error={ error }
                    />
                    <button className='btn btn-primary' onClick={ this.addTodo } style={ { marginTop: '5px', width: '70%' } }>Submit</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(HomePage);
