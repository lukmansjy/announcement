/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Announcement from './src/containers/pages/Announcement';


class App extends Component{
  render(){
    return(
      // <View>
        <Announcement/>
      // </View>
    )
  }
}

export default App
