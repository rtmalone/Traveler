import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

export default class Button extends React.Component {
  render() {
    const { navigation, navigateTo } = this.props
    return (
      <TouchableOpacity underlayColor="blue" onPress={() => navigation.navigate(navigateTo)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'cadetblue',
    width: 300,
    height: 65,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 20,
    borderRadius: 10
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
})
