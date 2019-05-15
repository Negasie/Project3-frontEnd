import React from 'react';


const EditBet = (props) =>  {

  return (
    <div>
      <h4> Edit Bet</h4>
      <form onSubmit={props.closeAndEdit}>
        <label>
          Edit Which Game to Bet Here:
          <input type="text" name="game" onChange={props.handleFormChange} value={props.betToEdit.game}/>
        </label>
        <label>
          Change Your Action:
          <input type="text" name="action" onChange={props.handleFormChange} value={props.betToEdit.action}/>
        </label>
        <label>
          Change Your Odds:
          <input type="text" name="odds" onChange={props.handleFormChange} value={props.betToEdit.odds}/>
        </label>        
        <input type='Submit'/>
      </form>
    </div>

    )
  }


export default EditBet;


