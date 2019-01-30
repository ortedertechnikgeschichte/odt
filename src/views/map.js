import React, {Component} from 'react'


import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { default as MarkerClusterer } from 'react-google-maps/lib/addons/MarkerClusterer'
import _ from 'lodash'

import silverMapStyle from '../components/mapstyles/silverMapStyle'
import markers from '../lib/markers'
import StyledInfoWindow from '../components/InfoWindow'



class InnerMaps extends Component {
  state = {
    active: null
  }

  activateMarkerWindow = active => () => {
    this.setState({active})
  }

  deactivateMarkerWindow = () => {
    this.setState({active: null})
  }

  render() {
    return <GoogleMap
      ref={this.props.onMapLoad}
      defaultZoom={5}
      defaultCenter={{lat: 40.080959, lng: 14.129329}}
      defaultOptions={{styles: silverMapStyle}}
    >
      <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={50}
      >{markers.map((marker, index) => <Marker
        position={marker}
        key={index}
        onClick={this.activateMarkerWindow(index)}
      >
        {(this.state.active === index) && <InfoWindow
          onCloseClick={this.deactivateMarkerWindow}
        >
          <StyledInfoWindow index={index} {...marker} />
        </InfoWindow>}
      </Marker>)}</MarkerClusterer>
    </GoogleMap>
  }
}

const Maps = withGoogleMap(InnerMaps)

Maps.defaultProps = {
  containerElement: <div style={{flex: 1}}/>,
  mapElement: <div style={{height: '100%'}}/>,
}

export default Maps
