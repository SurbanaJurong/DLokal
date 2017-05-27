import React, { Component } from 'react';
import _ from 'lodash';
import MapView from 'react-native-maps';
import { View, StyleSheet } from 'react-native';

//Image Imports
import imghd from '../img/onemap/hd.png';
import imgcc from '../img/onemap/onemap-fc-childcare.png';
import imgps from '../img/onemap/location-icon.png';
import imghc from '../img/onemap/hc.jpg';
import imgl from '../img/onemap/library.gif';
import imgef from '../img/onemap/Fit@SG.png';

const ONEMAP_AUTH = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI4MSwidXNlcl9pZCI6MjgxLCJlbWFpbCI6Im9uZ2ppYXJ1aUBob3RtYWlsLmNvbSIsImZvcmV2ZXIiOmZhbHNlLCJpc3MiOiJodHRwOlwvXC9vbTIuZGZlLm9uZW1hcC5zZ1wvYXBpXC92MlwvdXNlclwvc2Vzc2lvbiIsImlhdCI6MTQ5NTc4MzExOSwiZXhwIjoxNDk2MjE1MTE5LCJuYmYiOjE0OTU3ODMxMTksImp0aSI6IjAyNjY2OWJkNmM2NTVjNTVkNGYyZWNiOTI5MGRhZWMwIn0.rrSI73v78PnqdSBkdhL_i1LhKFiQM5G702stJXlud2M';
const THEMES = ['childcare', 'healthierdining', 'preschools_location', 'libraries', 'exercisefacilities']; //'recyclingbins', 'moh_medical_dental'

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 1.299218899564664,
        longitude: 103.8557215368175,
        latitudeDelta: 0.01551818062390046,
        longitudeDelta: 0.01218651113121496,
      },

      markers: [

      ],

      location: {
        latitude: 1.323602,
        longitude: 103.821433
      }
    };
  }

  componentWillMount() {

  }

  onRegionChange(region) {
    console.log(region);
    this.setState({ region });
    this.fetchMarkers();
    // _.debounce(() => {
    //   console.log("lodash");
    //   this.fetchMarkers();
    // }, 100);
  }

  fetchMarkers() {
    const latstart = this.state.region.latitude;
    const lngstart = this.state.region.longitude;
    const latwithdel = this.state.region.latitude + 0.01;//this.state.region.latitudeDelta;
    const lngwithdel = this.state.region.longitude + 0.01;//this.state.region.longitudeDelta;

    THEMES.map((theme) => {
      const url = `https://developers.onemap.sg/privateapi/themesvc/retrieveTheme?queryName=${theme}&token=${ONEMAP_AUTH}&extents=${latstart},${lngstart},${latwithdel},${lngwithdel}`;
      console.log(url);
      fetch(url)
        .then(response => response.json())
        .then(response => response.SrchResults.slice(1).map((item) => {
          const latlng = item.LatLng.split(',');
          const newMarker = {
            latlng: {
              latitude: parseFloat(latlng[0], 10),
              longitude: parseFloat(latlng[1], 10)
            },
            title: item.NAME,
            description: item.DESCRIPTION,
            icon: item.ICON_NAME
          };

          function matchLatLng(m) {
            return m.title === newMarker.title;
          }


          if ((this.state.markers.find(matchLatLng) === undefined)) {
            this.setState((prevState) => {
              if (prevState.markers.length > 30) {
                return { markers: [...prevState.markers.slice(1), newMarker] };
              }
              return { markers: [...prevState.markers, newMarker] };
            });
          }

          return null;
        }));
      return null;
    });
  }

  renderMarkers() {
    return this.state.markers.map(marker =>
    {
      let image;
        switch (marker.icon) {
          case 'Fit@SG.png':
            image = imgef;
            break;
          case 'library.gif':
            image = imgl;
            break;
          case 'location-icon.png':
            image = imgps;
            break;
          case 'onemap-fc-childcare.png':
            image = imgcc;
            break;
          case 'HealthierDining.png':
            image = imghd;
            break;
          case 'HC icons_Opt 8.jpg':
            image = imghc;
            break;

          default:
            image = imghc;
        }
      return (
        <MapView.Marker
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
          key={marker.id}
        />
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          showsUserLocation
          showsMyLocationButton
          style={styles.mapStyle}
          region={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}
        >
          {this.renderMarkers()}
        </MapView>
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

export default Map;
