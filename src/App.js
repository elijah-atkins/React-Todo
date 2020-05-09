import React from "react";
import data from './components/data/data'
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import EditTodoForm from './components/EditTodoForm';

import './scss/index.scss';
const initialFormState = { id:null, task:"", completed:false }
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data, // same as data: data
      editing:false, 
      currentID:"",
      currentUser:initialFormState,
    };
  }

  
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // Class methods to update state
  toggleItemDone = (itemId) => {
    // console.log("ea: index.js: App: toggleItemDone: itemId: ", itemId);
    this.setState({
      data: this.state.data.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };
  editItem = (item) => {
    this.setState({
      editing:true,
      currentID:item.id,
      currentUser:{id:item.id,task:item.task,compleated:false}
    })
  }
  updateItem = (updatedItem) => {
    const editItem ={
      task:updatedItem,
      id:this.state.currentID,
      completed: false
    }

    this.setState({
      editing:false,
      data: [...this.state.data.map(item => item.id === this.state.currentID ? editItem : item)]
     })


  }
  addItem = (item) => {
    const newItem = {
      task: item,
      id: this.state.data.length+1,
      completed: false,
    };
    this.setState({ data: [...this.state.data, newItem] });
  };

  clearDone = () => {
   //console.log("ea: index.js: clearDone");
    this.setState({
      data: [
        ...this.state.data.filter((item) => {
          return !item.completed;
        }),
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>ToDo List</h1>
        {this.state.editing ? 
         ( <EditTodoForm 
         currentUser={this.state.currentUser}
         updateItem={this.updateItem}/>)
          :
         ( <TodoForm addItem={this.addItem}/>)
        }
          
         


        </div>
        <TodoList
          editItem={this.editItem}
          toggleItemDone={this.toggleItemDone}
          data={this.state.data}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App;
