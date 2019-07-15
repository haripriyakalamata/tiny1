example
-------
<p>import React from 'react';</p>
<p>import { Text, View, StyleSheet } from 'react-native';</p>
<p>import ListSearch from '@haripriya.kalamata/tiny';</p>
<p>export default class App extends React.Component {</p>
<p>   constructor(props) { </p>
<p>    super(props)</p>
<p>   }  </p>
<p> render() {  </p>
<p>    return ( </p>
<p>      <View style={styles.container}> </p>
<p>          <ListSearch    </p>
<p>             list_json_url = 'https://api.myjson.com/bins/1cjvh3'   </p>               
<p>                              /*save the json with name myjson &    </p>
 <p>                              searchable item key as title */        </p>
 <p>             displayItems={({ item }) => <Text>{item.title},{item.email}</Text>}  </p>
<p>              uniqueKey={({ name }, index) => name}             </p>
<p>           />       </p>
  <p>     </View> </p>
 <p>    );         </p>
 <p>  }               </p>
<p> }                  </p>

<p> const styles = StyleSheet.create({     </p>
 <p>  container: {                  </p>
<p>     flex: 1,                      </p>
 <p>    justifyContent: 'center',          </p>
<p>     backgroundColor: '#ecf0f1',      </p>
<p>     padding: 8,             </p>
 <p>  },    </p> 

<p> });  </p>

