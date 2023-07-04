import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text className="text-red-500 text-4xl">Mithun</Text>
      <StatusBar barStyle="light-content"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default App;