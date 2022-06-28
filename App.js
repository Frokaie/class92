import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./Screens/LoginScreen";

export default class App extends React.Component {
  render(){
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <LoginScreen/>
    </View>
    </SafeAreaProvider>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
