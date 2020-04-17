import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

import "../App.css";

export default class TodoList extends React.Component{
    state={
        todos: []
    };

    addTodo = (todo) => {
        const newTodos = [todo, ...this.state.todos];
        console.log(newTodos);
        this.setState({
            todos: newTodos
        })
    };

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                       // id: todo.id,
                       // text: todo.text,
                        complete: !todo.complete
                    }
                } else {
                    return todo;
                }
            })
        })
    };

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !==id)
        });
    };

    removeAllTodoThatAreComplete = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        });
    };

    render(){
        return (
            <React.Fragment>
                <TodoForm onSubmit={this.addTodo}/>
                {this.state.todos.map(todo => (
                    <Todo key={todo.id}
                          todo={todo}
                          toggleComplete={()=>this.toggleComplete(todo.id)}
                          onDelete={()=> this.handleDeleteTodo(todo.id)}
                    />
                ))}
                <div className="todos-status">
                    <div>
                        todos left: {this.state.todos.filter(todo => !todo.complete).length}
                    </div>


                    {this.state.todos.filter(todo => todo.complete).length ? (
                        <div>
                            <button className="btn"
                                onClick={this.removeAllTodoThatAreComplete}
                            >
                                remove all complete todos</button>
                        </div>
                    ): null }
                </div>

            </React.Fragment>
        );
    }
}