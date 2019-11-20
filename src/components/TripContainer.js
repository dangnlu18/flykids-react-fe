import React from 'react'

const TripContainer = props => {
  console.log(props)
  return (
    <div>
      <div>
        <p>name: {props.trip.airport}</p>
        <p>Description: {props.trip.airline}</p>
      </div>
    </div>
  )
}

export default TripContainer
