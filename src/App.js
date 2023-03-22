import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { InfoAlert } from './Alert';

class App extends Component {
  state ={
    events: [],
    locations: [],
    seletedLocation: 'all',
    eventCount: 32,
    infoText: ''
  }

  networkStatus = () => {
    this.setState({infoText: navigator.online ? 'online' : 'offline'})
  };

  async componentDidMount() {
    window.addEventListener('online', this.networkStatus);
    window.addEventListener('offline', this.networkStatus);
    this.networkStatus();
    
    this.mounted = true;
    getEvents().then(events => {
      if (this.mounted) {
        events = events.slice(0,this.state.eventCount);
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){ this.mounted = false; }

  updateEvents = (location, inputNumber) => {
    const {eventCount, seletedLocation} = this.state;
    if (location) {
      getEvents().then(events => {
        const locationEvents = (location === 'all') ?
        events :
        events.filter(event => event.location === location);
        const eventsToShow=locationEvents.slice(0, eventCount);
        this.setState({
        events: eventsToShow,
        seletedLocation: location
        });
      });  
    } else {
      getEvents().then((events) => {
        const locationEvents = (seletedLocation === 'all') ?
        events :
        events.filter((event) => event.location === seletedLocation);
        const eventsToShow=locationEvents.slice(0, inputNumber);
        this.setState({
          events: eventsToShow,
          eventCount: inputNumber
        });
      })
    }

  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(', ').shift();
      return { city, number };
    })
    return data;
  };

  render() {
    return (
      <div className="App">
        <div>
        <InfoAlert text={this.infoText}/>
        </div>
        <div className="filter-box">
          <CitySearch
            locations={this.state.locations}
            updateEvents= {this.updateEvents}
          />
          <NumberOfEvents
            eventCount={this.state.eventCount}
            updateEvents={this.updateEvents}
          />
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;