import React from 'react';



const Bets = (props) => {

  const BetList = props.bets.map((bet) => {
    return (
      <li key={bet._id}>
        <span>{bet.game}</span><br/>
        <span>{bet.action}</span><br/>
        <span>{bet.odds}</span><br/>
        <button onClick={props.deleteBet.bind(null, bet._id)}>Delete</button>
      </li>

      )
  })

  return (
    <ul>
      {BetList}
    </ul>
    )

}





export default Bets;