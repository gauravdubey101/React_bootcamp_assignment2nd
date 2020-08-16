import React from 'react';
import TodoItem from './components/todo-item';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
      todos: ['first Task', 'Second Task'],
      newTodo: '',
      name: 'Gaurav'
    };
  }
  
toggleChange = () =>{
  this.setState({
    isChecked: !this.state.isChecked,
  });
}
  render() {
    return (
      <div>
        <h1> {this.state.name}s' Todos</h1>
        <input 
          type="text" 
          placeholder="Todo" 
          value={this.state.newTodo}
          onChange={(event) => {
            const value = event.target.value
            this.setState({
              newTodo: value
            })
          }}
        />
       

   


      



        <button onClick={() => {
          this.setState({
            todos: [...this.state.todos, this.state.newTodo]
          })
          

          // this.setState((prevState) => {
          //   const newTodos = prevState.todos.remove(1)
          //   return {
          //     todos: newTodos
          //   }
          // })
        }}>
          Add Todo
        </button>

        


        <ol>
          {this.state.todos.map(todo => <TodoItem todo={todo} />)}
        </ol>

        <label>
        <input type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />
        All Done
      </label>

      </div>
      
    );
  }
}




export default App;
