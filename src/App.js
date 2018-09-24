import React, { Component } from 'react';
import './index.css';

//components
import Header from './components/Header';
import Filter from './components/Filter';
import Counter from './components/Counter';
import Invitees from './components/Invitees';

let people = [
  {
    name: "Shehan",
    confirmed : true
  },
  {
    name: "Mike",
    confirmed : false
  },
  {
    name: "Craig",
    confirmed : true
  },
  {
    name: "Alena",
    confirmed : true
  },
  {
    name: "Andrew",
    confirmed : true
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Invitees : [],
      input :''
    }

    this.onTypeChange = this.onTypeChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({
      Invitees: people,
    });
  }

  onTypeChange(event){
    this.setState({
      input : event.target.value
    });
  }

  onFormSubmit(event){
    event.preventDefault();
    console.log(this.state.input);
    this.state.Invitees.push({
      name : this.state.input,
      confirmed : false
    });
    this.setState(this.state);
    this.setState({
      input : ""
    });
  }

  render() {
    return (
      <div className="App">
        <Header input={this.state.input} onTypeChange={this.onTypeChange} onSubmit={this.onFormSubmit}/>
        <div className="main">
          <Filter/>
          <Counter/>
          <Invitees input={this.state.input} Invitees={this.state.Invitees}/>
        </div>
      </div>
    );
  }
}

export default App;
