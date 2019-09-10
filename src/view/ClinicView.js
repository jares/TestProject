import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class ClinicView extends Component {
  render() {
    return (
    <View style={styles.card}>
      <Image source={{uri: this.props.imgUri}} style={{width: 193, height: 110, alignSelf:'center', margin:16}}/>
      <Text style={styles.clinicName}>{this.props.name}</Text>
      <Text style={styles.clinicPhone}>{this.props.phone}}</Text>
      <Text style={styles.clinicCity}>{this.props.city}</Text>

      <Text style={styles.more}>Voir détails</Text>
    </View>
      
    );
  }
}

const styles = StyleSheet.create({
  clinicPhone: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal:8,
    color: Colors.black
  },
  clinicName: {
    marginTop: 8,
    fontSize: 22,
    fontWeight: '400',
    paddingHorizontal:8,
    color: Colors.dark,
  },
  clinicCity: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    paddingHorizontal:8,
    color: Colors.dark,
  },
  more: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '400',
    alignSelf:'center',
    padding:8,
    color: Colors.dark,
  },
  card: {
    flex: 1, 
    flexDirection: 'column', 
    margin: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 15,
    borderColor: '#cecece'
  }
})