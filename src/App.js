import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LoginForm />
    </View>
  );
}}

export default App;
