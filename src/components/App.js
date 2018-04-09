import React from 'react';


class App extends React.Component {
  //RENDER IS NOT BEING CALLED IT'S BEING DEFINED
  state = {
    todos: [{text: 'Water plants', completed: false}, {text:'Got to gym', completed:false}, {text:'Feed python', completed:false}, {text:'Learn Python', completed:false}],
  };
  render () {
    const {todo} = this.state
    return (
      <div>
        <Heading name="Jonny"/>
        <Checklist 
        todos={this.state.todos}
        removeTodo={this.removeTodo}
        toggleComplete={this.toggleComplete}/>
      </div>
    );
  }
  removeTodo = (taskToRemove) => {
    const newTodos = this.state.todos.filter(task => {
      return task !== taskToRemove;
    })
    this.setState({
      todos: newTodos
    });
  }
  toggleComplete = (taskTotoggleComplete) => {
    const newTodos = this.state.todos.map(task => {
      return task !== taskTotoggleComplete ? task : 
      task.completed === true ? {text: task.text, completed: false} :
      {text: task.text, completed: true};
    })
    this.setState({
      todos: newTodos
    })
  }
}

function Checklist({todos, removeTodo, toggleComplete}) {
  return <ul>
    {todos.map((task, i) => {
      return <Task 
        task={task}
        key={`${i}${task}`}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    })}
  </ul>
}

// function Task({task, removeTodo}) {
//   console.log('removing todo')
//   return <li onClick={() => removeTodo(task)}>{task.text}</li>
// }
function Task({task, toggleComplete}) {
  console.log('crossing through')
  console.log(task)
  const line = {
    "text-decoration": "line-through"
  }
  return task.completed ? <li style={line} onClick={() => toggleComplete(task)}>{task.text}</li>:
   <li onClick={() => toggleComplete(task)}>{task.text}</li>;
}


//FUNCTION HAS TO RETURN A REACT ELEMENT/JSX
//Caps on Heading because it's a class
function Heading ({name}) { //destructuring props
  return <h1>{name}'s Todos</h1>
}

export default App;

