import React, { useState, useEffect } from "react";
import api from "../utils/api";
import TripContainer from "./TripContainer";

export default function TripList() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        api().get("/trips")
            .then(res => {
                console.log(res);
                setTrips(res.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    return (
        <div>
            {trips.map(trip => {
                return(
                    <TripContainer 
                        key={trip.id}
                        trip={trip}

                    />
                )
            })}
        </div>
    )
}