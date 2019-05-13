import React from 'react';

const EventsContainer = (props)=>{

    const eventList = props.eventList.map((event)=>{
        return (
      <li key={event._id}>
        <span>{event.dateEvent}</span><br/>
        <span>{event.strEvent}</span><br/>
      </li>
        )
    })
    return(
        <div className="events-dump">
            <h1>These are the Upcoming Games</h1>
            <ul>
                {eventList}
            </ul>
        </div>
    )
}

export default EventsContainer; 