import { View, Text } from 'react-native';
import React, { useRef } from 'react';
import moment from 'moment';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
  const mapView = useRef(null);
  const time = moment().format('LT');
  const deliveryTimeRange = '20-25'; // You can modify this based on your actual delivery time range
  const deliveryLocation = { latitude: 37.78825, longitude: -122.4324 }; // You can modify these coordinates based on the delivery location

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 80, padding: 10 }}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: '900', textAlign: 'center', color: '#3d3d3d' }}>
            Delivery in {deliveryTimeRange} mins ⏰
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '600', textAlign: 'center', color: '#3d3d3d' }}>
            Current Time: {time}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: '600', textAlign: 'center', color: '#3d3d3d' }}>
            Help ?
          </Text>
        </View>
      </View>

      <MapView style={{ flex: 1 }} ref={mapView} initialRegion={{ ...deliveryLocation, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
        <Marker coordinate={deliveryLocation} title="Delivery Location" description="Your package will be delivered here!" />
      </MapView>
    </View>
  );
};

export default DeliveryScreen;
