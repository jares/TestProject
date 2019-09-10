import React, { Component } from 'react';
import { View, Text, TextInput, Button, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import ClinicView from './ClinicView';

class SearchResultList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      city: "montréal",
      category: "radiologie",
      data: [],
      error: null,
    };

  }

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    const url = `https://clinia.ca/fr/s/json/${this.state.category}/${this.state.city}`;
    this.setState({ loading: true });

    fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        data: responseJson.listings,
        error: responseJson.error,
        loading: false,
      });
    })
    .catch(error => {
      this.setState({ error, loading: false });
      throw error;
    });
  };

  cityChange = (text) => {
    this.setState({city: text});
  }

  categoryChange = (text) => {
    this.setState({category: text});
  }


  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={this.cityChange}
          value={this.state.city}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={this.categoryChange}
          value={this.state.category}
        />
        <View style={{paddingHorizontal:32, paddingVertical:8}}>
          <Button title='Rechercher' onPress={this.fetch}/>
        </View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ClinicView
              imgUri={`${item.thumbnail}`}
              name={`${item.name}`}
              phone={`${item.phone}`}
              city={`${item.location}`}
            />
          )}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderWidth: 2,
    height: 50,
    borderRadius: 15,
    borderColor: '#cecece',
  }
});

export default SearchResultList;
