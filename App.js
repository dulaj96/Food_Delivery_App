import React from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import NavigationApp from "./src/navigation/NavigationApp";
import { store } from './app/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationApp />
    </Provider>
  );
}

export default App;