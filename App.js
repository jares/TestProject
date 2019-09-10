import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import SearchResultList from './src/view/SearchResultList';

const App = () => {
  return (
    <SafeAreaView style={{flex:1, flexDirection:'column'}}>
      <View style={{flex:1}}> 
        <View style={{flex: 1, flexDirection: 'row', justifyContent:'center'}}>
          <Image
              style={{width: 30, height: 30, marginVertical: 8}}
              source={{uri:'https://media.licdn.com/dms/image/C560BAQFPv1X6hij9Mg/company-logo_400_400/0?e=1576108800&v=beta&t=hVPXzZxCUvQOyjAtkS-Rrj6ppl2gBg3ny8MCrop7qIA'}}
          />  
          <View>   
            <Text style={styles.header}>Clinia</Text>
          </View>
        </View>
      </View>

      <SearchResultList/>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  header: {
    color: 'gray',
    fontSize: 24,
    margin: 10,
    textAlign: 'center',
  },
});

export default App;
