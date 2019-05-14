import React, { Component } from 'react';
import CreateBet from '../CreateBet';
import BetList from '../BetList';

class BetContainer extends Component {
	constructor(){
		super();

		this.state = {
			bets: [],
			betToEdit: {
				_id: null,
				game: '',
				action: '',
				odds: ''
			},

		}
	}
	componentDidMount(){
		this.getBets();
	};
	getBets = async () => {
		try{
			const response = await fetch('http://localhost:9000/users');
			if(response.status !== 200){
				throw Error(response.statusText);
			}
			const betsParsed = await response.json();
			this.setState({bets: betsParsed.data})
		}	catch(err){}
	}

	addBet = async (bet, e) =>{
		e.preventDefault();
		console.log(bet);

	try {
		const createdBet = await fetch('http://localhost:9000/users', {
			method: 'POST',
			body: JSON.stringify(bet),
			headers: {
				'Content-type': 'application/json'
			}
		});
		const parsedResponse = await createdBet.json();
		this.setState({bets: [...this.state.bets, parsedResponse.data]})
	} catch(err){
		console.log(err)
	}

	}
	deleteBet = async (id, e) =>{
		console.log(id, 'this is id');
		e.preventDefault();
		try {
			const deleteBet = await fetch('http://localhost:9000/users' +id, {
				method: 'DELETE'
			});
			console.log('trying to delete');
			const deleteBetJson = await deleteBet.json();
			this.setState({bets: this.state.bets.filter((bet, i)=> bet._id !== id)});

		} catch(err) {
			console.log(err);
		}
	}
  render(){
    console.log(this.state, "<---- state object")
    return (
      <div>
        <CreateBet addBet={this.addBet}/>
        <BetList getBets={this.getBets}/>
      </div>
      )
  }	


}



















export default BetContainer;


