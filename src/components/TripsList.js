import React, { useState, useEffect } from 'react'
import TripContainer from './TripContainer'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import api from '../utils/api'

function TripList(props) {
  const history = useHistory()

  const [trips, setTrips] = useState(props.trips)

  useEffect(() => {
    api()
      .get('/trips')
      .then(resp => {
        console.log(resp.data)
        setTrips(resp.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleClick = e => {
    e.preventDefault()
    history.push('/add-trip')
  }

  if (!trips) {
    return <h1>Loading </h1>
  } else {
    return (
      <div>
        {trips.map(trip => {
          return <TripContainer key={trip.id} trip={trip} />
        })}
        <button onClick={handleClick}>Add New Trip</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    trips: state.trips
  }
}
export default connect(mapStateToProps)(TripList)
