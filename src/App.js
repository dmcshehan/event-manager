import React, { Component } from 'react';
import './index.css';

//components
import Header from './components/Header';
import Filter from './components/Filter';
import Counter from './components/Counter';
import Invitees from './components/Invitees';

let people = [
  {
    id : 1,
    name: "Shehan",
    confirmed : true,
    isEditing : false

  },
  {
    id : 2,
    name: "Mike",
    confirmed : false,
    isEditing : false
  },
  {
    id : 3,
    name: "Craig",
    confirmed : true,
    isEditing : false

  },
  {
    id : 4,
    name: "Alena",
    confirmed : false,
    isEditing : false
  },
  {
    id : 5,
    name: "Andrew",
    confirmed : false,
    isEditing : false
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Invitees : [],
      isFiltered: false,
      input :''
    }

    this.onTypeChange = this.onTypeChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onConfirmChange = this.onConfirmChange.bind(this);
    this.onEditChange = this.onEditChange.bind(this);
    this.onFilter =  this.onFilter.bind(this);
    this.onInviteeNameChange = this.onInviteeNameChange.bind(this);
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
    if(this.state.input !== ""){
      this.state.Invitees.push({
        id : Math.random().toString(36).substr(2, 16),
        name : this.state.input,
        confirmed : false
      });
      this.setState(this.state);
      this.setState({
        input : ""
      });
    }
  }

  toggleInviteeProppertyAt(property,indexToChange){
    this.setState({
       Invitees : this.state.Invitees.map((Invitee,index)=>{
         if(index === indexToChange){
           return {
             ...Invitee,
             [property] : !Invitee[property]
           };
         }
         return Invitee;
       })
    });

}

onConfirmChange(indexToChange){
  this.toggleInviteeProppertyAt('confirmed',indexToChange);
}

onEditChange(indexToChange){
  this.toggleInviteeProppertyAt('isEditing',indexToChange);
}


  onFilter(){
    this.setState({
      isFiltered : !this.state.isFiltered
    });
  }

  onInviteeNameChange(newName,indexToChange){

    this.setState({
       Invitees : this.state.Invitees.map((Invitee,index)=>{
         if(index === indexToChange){
           return {
             ...Invitee,
              name : newName
           };
         }
         return Invitee;
       })
    });

  }

  onRemove(indexToRemove){
    this.state.Invitees.splice(indexToRemove,1);
    this.setState(this.state);
  }


  render() {
    return (
      <div className="App">
        <Header input={this.state.input} onTypeChange={this.onTypeChange} onSubmit={this.onFormSubmit}/>
        <div className="main">
          <Filter onFilter={this.onFilter}/>
          <Counter Invitees={this.state.Invitees}/>
          <Invitees
            onRemove={function(index){this.onRemove(index)}.bind(this)}
            isFiltered={this.state.isFiltered}
            input={this.state.input}
            Invitees={this.state.Invitees}
            onConfirmChange={function(index){this.onConfirmChange(index)}.bind(this)}
            onChange={function(newName,index){this.onInviteeNameChange(newName,index)}.bind(this)}
            onEdit={function(index){this.onEditChange(index)}.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
