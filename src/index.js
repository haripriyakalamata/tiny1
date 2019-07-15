import React from 'react';
import {
  Button,
  FlatList,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableHighlight,
  TextInput,
} from 'react-native';


export default class ListSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      error: null,
      text: '',
      isFetching: false,
      item:'',
    };
    this.arrayholder = [];   
  // this.title = this.props.item1;
    this.uri = this.props.list_json_url;
    this.displayItems = this.props.displayItems;
    this.uniqueKey = this.props.uniqueKey;
   // this.searchableItem = this.props.searchableItem;
   // this.name= 'ForLeaseLand'; 
  }

  onRefresh() {
    this.setState({ isFetching: true, text: '' }, function() {
      this.listLandmarks();
    });
  }

  componentWillMount() {
    this.listLandmarks();
  }

  listLandmarks = () => {
    return fetch(this.uri) 
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            isFetching: false,
            data: responseJson.myjson, 
          },
          function() {}
        ); 
        this.arrayholder = responseJson.myjson;
      })
      .catch(error => {
        console.error(error);
      });
  };

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  renderHeader = () => {
    return (
      <TextInput
        style={styles.TextInputStyleClass}
        placeholder="Type Here..."
        onChangeText={text => this.searchFilterFunction(text)}
        value={this.state.text}
      />
    );
  };

searchFilterFunction = (text) => {   
    const newData = this.arrayholder.filter(item2 => {
      const itemData = item2.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({ data: newData, text: text });
  };

  
render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <FlatList
          refreshing={this.state.isFetching}
          onRefresh={() => this.onRefresh()}
          ListHeaderComponent={this.renderHeader}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          data={this.state.data}
          renderItem={this.displayItems} 
          keyExtractor={this.uniqueKey} 
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 30,
    backgroundColor: 'white',
  },
  TextInputStyleClass:{
        
   textAlign: 'center',
   height: 50,
   borderWidth: 3,
   borderColor: '#009688',
   borderRadius: 7 ,
   backgroundColor : "#FFFFFF"
        
   }
});

