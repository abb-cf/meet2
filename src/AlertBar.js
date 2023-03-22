import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class AlertBar extends Component {
    state = { infoText: ''}

    networkStatus = () => {
        this.setState({infoText: navigator.online ? 'online' : 'offline'})
    };
  
    async componentDidMount() {
      window.addEventListener('online', this.networkStatus);
      window.addEventListener('offline', this.networkStatus);
      this.networkStatus();
    }
  
    render() {
      return (
        <div className="AlertBar">
          <div className="utilities">
            <InfoAlert text={this.state.infoText} />
          </div>
          <div className="title">
            <h1>MEET&nbsp;</h1>
          </div>
        </div>
      );
    }
  }
  
  export default AlertBar;