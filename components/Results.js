import React, { Component } from 'react';
import ResultItem from './ResultItem.js';
import { Text } from 'react-native';

export default class Results extends Component {
    render() {
        if(this.props.isLoading) {
            return <Text>"Loading..."</Text>
        }
        if(this.props.error) {
            return <Text><p>{this.props.error.message}</p></Text>
        } else {
            console.log(this.props.passengers);
            return this.props.retFlights && this.props.retFlights.length > 0 ? 
                this.props.depFlights.map((flight) => (
                    this.props.retFlights.map((retFlight) => (
                        (this.props.passengers * (flight.cost + retFlight.cost)) <= this.props.costMax ?
                        <ResultItem 
                            key={flight.flightId + retFlight.flightId} 
                            flightId={flight.flightId}
                            retFlightId={retFlight.flightId}
                            route={flight.origin + ">" + flight.dest}
                            retRoute={retFlight.origin + ">" + retFlight.dest}
                            depTime={"Depart: " + flight.depTime}
                            arrTime={"Arrive: "+ flight.arrTime}
                            retDepTime={"Depart: " + retFlight.depTime}
                            retArrTime={"Arrive: "+ retFlight.arrTime}
                            cost={"NZD" + (this.props.passengers * (flight.cost + retFlight.cost))}
                        />  : ''
                    ))
                ))
                :
                this.props.depFlights.map((flight) => (
                    (this.props.passengers * flight.cost) <= this.props.costMax ?
                    <ResultItem 
                        key={flight.flightId} 
                        flightId={flight.flightId}
                        route={flight.origin + ">" + flight.dest}
                        depTime={"Depart: " + flight.depTime}
                        arrTime={"Arrive: "+ flight.arrTime}
                        cost={"NZD" + (this.props.passengers * flight.cost)}
                    /> : ''
                ))
        };
    }
}
