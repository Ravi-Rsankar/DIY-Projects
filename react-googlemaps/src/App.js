import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 12.9716,
            lng: 77.5946
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  // apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE'
})(MapContainer);