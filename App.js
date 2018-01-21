import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ComicView from './app/components/ComicView'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ComicView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
