my first package



example
-------

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ListSearch from '@haripriya.kalamata/tiny';

export default class App extends React.Component {
   constructor(props) {
    super(props)
  }
render() {
    return (
      <View style={styles.container}>
          <ListSearch 
             list_json_url = 'https://api.myjson.com/bins/1cjvh3'                  
                              //save the json with name myjson & 
                              //searchable item key as title
             displayItems={({ item }) => <Text>{item.title},{item.email}</Text>}
             uniqueKey={({ name }, index) => name} 
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});


