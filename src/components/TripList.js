import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListContainer from './TripListContainer'

export default function TripList() {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    axios
      .get('https://african-marketplace-bw.herokuapp.com/api/items')
      .then(res => {
        console.log(res)
        setTrips(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      {trips.map(trip => {
        return <ListContainer key={trip.id} trip={trip} />
      })}
    </div>
  )
}
