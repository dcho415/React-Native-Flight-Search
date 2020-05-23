import React, { Component } from 'react';
import { View } from 'react-native';
import FlightsData from "../assets/flights.json";
import Header from './layout/Heading';
import Search from './Search';

class App extends Component {
    state = {
        origin: '',
        dest: '',
        depDate: '',
        retDate: '',
        passengers: 0, 
        isReturn: false,
        route: '', 
        upDepDate: '',
        upRetDate: '',
        depFlights: [],
        retFlights: [],
        setPassengers: 0,
        costMax: 5000
    }

    onChange = (data, value) => {
        this.setState({ [data]: value });
    }

    onSubmit = () => {
        this.updateResultHeading();

        this.setState({
            flights: FlightsData,
            isLoading: false
        }, () => {
            this.setState({ depFlights: [...this.state.flights.filter(flight => flight.origin === this.state.origin &&
            flight.dest === this.state.dest && flight.date === this.state.depDate)] })

            if (this.state.isReturn) {
                this.setState({ retFlights: [...this.state.flights.filter(flight => flight.origin === this.state.dest &&
                flight.dest === this.state.origin && flight.date === this.state.retDate)] })
            } else {
                this.setState({ retFlights: [] }, () => console.log(this.state.retFlights))
            }
        }
        )
    }

  onSelect = (value) => this.setState({ isReturn: value==="return" }, () => console.log(this.state.isReturn));

  updateResultHeading = () => {
    var updatedRoute = this.state.origin + '>' + this.state.dest;
    this.setState({ route: this.state.isReturn ? updatedRoute + '>' + this.state.origin : updatedRoute });

    this.setState({ upDepDate: "Depart : " + this.state.depDate});
    this.setState({ upRetDate: this.state.isReturn ? "Return : " + this.state.retDate : '' })
    this.setState({ setPassengers: this.state.passengers})
  }

  render() {
    return (
    <View >
        <Header />
        <Search 
          isReturn={this.state.isReturn}
          onChange={this.onChange} 
          onSubmit={this.onSubmit} 
          onSelect={this.onSelect} 
          costMax={this.state.costMax}
        />
        {/* <ResultsHeading 
          route={this.state.route} 
          depDate={this.state.upDepDate}
          retDate={this.state.upRetDate}
        />
        <Results
          isLoading={this.state.isLoading}
          error={this.state.error}
          depFlights={this.state.depFlights}
          retFlights={this.state.retFlights}
          passengers={this.state.setPassengers}
          costMax={this.state.costMax}
        /> */}
      </View>
    );
  }
}

export default App;
