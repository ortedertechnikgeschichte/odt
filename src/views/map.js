import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withGoogleMap, GoogleMap, Marker, InfoBox } from "react-google-maps"
import { default as MarkerClusterer } from "react-google-maps/lib/addons/MarkerClusterer"
import _ from 'lodash'
import oldMapStyle from "../components/oldMapStyle.json"

const markers = [
  {
    lat: 47.274370,
    lng: 11.349434
  }, {
    lat: 50.274370,
    lng: 11.349434
  }, {
    lat: 48.274370,
    lng: 30.349434
  }, {
    lat: 48.274370,
    lng: 30.349434
  }, {
    lat: 52.274370,
    lng: 11.349434
  }
]

class InnerMaps extends Component {
  render() {
    return <GoogleMap
      ref={this.props.onMapLoad}
      defaultZoom={5}
      defaultCenter={{lat: 41.898999, lng: 12.483780}}
      defaultOptions={{styles: oldMapStyle}}
    >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={200}
    >
    {markers.map((marker, index) => {
      return <Marker
        position={marker}
        key={index}
      />
    })}
    </MarkerClusterer>
    </GoogleMap>
  }
}

const Maps = withGoogleMap(InnerMaps)

Maps.defaultProps = {
  containerElement: <div style={{flex: 1}}/>,
  mapElement: <div style={{height: '100%'}}/>,
}

export default Maps;
