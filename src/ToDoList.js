import React, { Component } from 'react';
import Header from './Header';
import SingleTodo from './SingleTodo';



class ToDoList extends Component{
  constructor(){
    super();
    this.state = {
      count: 0,
      todos: [],
      currentTodo: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  increment = () => {
    this.setState({ count: this.state.count +1 });

  }

  onChange(event) {
    this.setState({currentTodo: event.target.value});
  }

  onClick=() => {
  
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);
    this.setState({todos:todosCopy , currentTodo :""});
      
  }

  deletetodo = i =>{
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i,1);
    this.setState({todos:todosCopy});
  }

  render(){
    
    let dottodos = this.state.todos.map( (e,i) => 
    { 

      return( <SingleTodo todo={e} delete= {()=> this.deletetodo(i) } /> );
    });
      
    return(
    
      
      <div className="todo-list">
          <Header title="Welcome to Todo & Counter app !"/>
        
          <h1>  Beginner's App to learn ReactJS Basics : {this.props.name}</h1>
          

          <button onClick={ this.increment}>increment</button>
          {this.state.count}
          <br /><br />
          <div >
            <input type="text" placeholder="enter todo" value={this.state.currentTodo} onChange={this.onChange} />
            <input type="submit" value="Submit" onClick= {this.onClick} /> <br />
            { this.state.todos.length === 0 ? "No todos yet!" : <ul>{dottodos} </ul> }
          </div>
      </div>
     

    
    );
  }
}


export default ToDoList;
