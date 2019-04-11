import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Button from '../components/Button'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button text="Travel-Tac-Toe" {...this.props} navigateTo={'Board'} />
        <Button text="Alphabet" {...this.props} navigateTo={'Alphabet'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
