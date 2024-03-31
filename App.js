import { StyleSheet, View, Image, TextInput, Text } from 'react-native';
import React from 'react';
import Form from './src/Form'
export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo-pra-fazer.png')}></Image>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6400',
    alignItems: 'center',
    paddingTop: 350,
  },
  logo: {
    height:55,
    marginBottom:20,
  },
  input: {
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: '#DDD',
    padding: 15,
    marginBottom: 15,
},
});
