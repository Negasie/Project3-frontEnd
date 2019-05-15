import React, { Component } from 'react';

class CreateBet extends Component {

  constructor(){
    super();

    this.state = {
      game: '',
      action: '',
      odds: ''
    }
  }
  updateBet = (e) => {
    // Computed Properties
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    // first argument on .bind is always the context of this
    return (

      <form onSubmit={this.props.addBet.bind(null, this.state)}>
        <label>
          Game:
          <input type="text" name="game" onChange={this.updateBet}/>
        </label>
        <label>
          Action:
          <input type="text" name="action" onChange={this.updateBet}/>
        </label>
         <label>
          Odds:
          <input type="text" name="odds" onChange={this.updateBet}/>
        </label>
        <input type='Submit'/>
      </form>
      )
  }
}

export default CreateBet;