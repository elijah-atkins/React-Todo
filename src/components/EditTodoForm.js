import React from "react";

class EditTodoForm extends React.Component {
  // Constructor with state
  constructor(props) {
    console.log(props.currentUser.task)
    super(props);
    this.state = { 
      newItemText:props.currentUser.task };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({ newItemText: e.target.value });

  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.newItemText) {
      this.props.updateItem(this.state.newItemText);
      this.setState({ newItemText: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          task="item"
          value={this.state.newItemText}
          onChange={this.handleChanges}
        />
        <button>Update</button> 
      </form>

    );
  }
}

export default EditTodoForm;
