import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined,
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ showSuggestions: true });
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });

        if (suggestions.length === 0) {
        this.setState({ 
            query: value,
            suggestions,
            infoText: 'We can not find the city you are looking for. Please try another city',
        });

        } else {
            return this.setState({
                query: value,
                suggestions: suggestions,
                infoText:''
            });
        }
    };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            suggestions: [],
            showSuggestions: false,
            infoText: ''
        });

        this.props.updateEvents(suggestion);
    }

  render() {
    return (
      <div className="CitySearch">
        <div>
            <div className="CitySearch-alert" margin-top="40px"  >
                <InfoAlert text={this.state.infoText} />
            </ div>
            <h4>Choose your nearest city</h4>
            <input
                type="text"
                className="city"
                placeholder="Search"
                value={this.state.query}
                onChange={this.handleInputChanged}
                onFocus={() => { this.setState({ showSuggestions: true }) }}
            />
            <ul className="suggestions" 
                style={this.state.showSuggestions ? {}: { display: 'none' }}>
                {this.state.suggestions.map((suggestion) => (
                    <li 
                        key={suggestion}
                        onClick={() => this.handleItemClicked(suggestion)}
                    >
                    {suggestion}</li>
                ))}
                <li onClick={() => this.handleItemClicked("all")}>
                    <b>See all cities</b>
                </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;
