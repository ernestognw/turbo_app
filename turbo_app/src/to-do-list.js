import React, { Component } from 'react';
import ListItem from './components/list-item';

type State = {
  text: string,
  items: Array<string>,
}

const DEFAULT_STATE = {
  text: '',
  items: [],
}

class ToDoList extends Component<> {
  constructor(props){
    super(props);
    this.state = DEFAULT_STATE;
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleDelete = event => {
    this.state.items.splice(event.target.id, 1)
    this.setState({
      items: this.state.items,
    })
  }

  addItem = event => {
    this.state.items.push(this.state.text);
    console.log(this.state.items);
    event.preventDefault();
    if (this.state.text.trim().length === 0){
      return;
    } else {
      this.setState({
        text: '',
        items: this.state.items
      })
    }
  }

  render(){
      return (
      <div>
        <form onSubmit={this.addItem}>
          <span>Add item:</span>
          <br/>
          <input type="text" onChange={this.handleChange} placeholder="Ingresa nueva tarea" value={this.state.text}/>
        </form>
        <ul>
        {
          !this.state.items.length ? 
          <h1>No items to show</h1> :
          this.state.items.map((item, index) => {
            return (
            <ListItem 
              index={index}
              key={index}
              item={item}
              handleDelete={this.handleDelete}
            />
            )
          })
        }
        </ul>
      </div>
    )
  }
}

export default ToDoList;