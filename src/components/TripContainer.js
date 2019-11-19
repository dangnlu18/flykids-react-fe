import React from "react";

const TripContainer = props => {
    return(
        <div>
            <div>
                <p>name: {props.trip.name}</p>
                <p>Description: {props.trip.description}</p>
            </div>
        </div>
    );
};

export default TripContainer;