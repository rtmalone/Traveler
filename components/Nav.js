import React from "react";
import { View, StyleSheet, Button } from "react-native";
// import Button from './Button'

export const Nav = props => {
  const { navigation } = props;
  return (
    <View style={styles.nav}>
      <Button onPress={() => navigation.navigate("Home")} title="Back" />
      <Button onPress={() => navigation.navigate("Home")} title="Cancel" />
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "cornsilk"
  }
});
