import React, { Component } from "react";
import Ideas from "./Ideas";
import Form from "./Form";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoTasks: [
        {
          id: 1,
          title: "Do Dishes",
          description: "There are no dishes to eat off of",
        },
        { id: 2, title: "Read Book", description: "Do homework" },
        { id: 3, title: "Do Laundry", description: "Stinky socks" },
      ],
      doneTasks: [],
    };
    this.addIdea = this.addIdea.bind(this);
  }
  addIdea = (newIdea) => {
    this.setState({ toDoTasks: [...this.state.toDoTasks, newIdea] });
  };

  deleteIdea = (id) => {
    console.log(id);
    const filteredIdeas = this.state.toDoTasks.filter((idea) => idea.id != id);

    this.setState({ toDoTasks: filteredIdeas });
  };

  render() {
    return (
      <main className="App">
        <h1>Task Manager</h1>
        <Form addIdea={this.addIdea} />
        {!this.state.toDoTasks.length && <h2>There is work to be done!</h2>}
        <p>Things To Do</p>
        <Ideas ideas={this.state.toDoTasks} deleteIdea={this.deleteIdea} />

        <p>Things Done</p>
        {!this.state.doneTasks.length && <h2>Keep Going!</h2>}

        <Ideas ideas={this.state.doneTasks} deleteIdea={this.deleteIdea} />
      </main>
    );
  }
}

export default App;
