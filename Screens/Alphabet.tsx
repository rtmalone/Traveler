import React from 'react'
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native'
import { alphabet } from '../data'
import { colors, fonts } from '../theme'

export default class Alphabet extends React.Component {
  state = {
    index: 0
  }

  changeLetter = () => {
    if (this.state.index >= 25) return
    this.setState({ index: this.state.index + 1 })
  }

  render() {
    const { index } = this.state
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.changeLetter}>
          <View>
            <Text style={styles.letter}>{alphabet[index]}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  letter: {
    fontSize: 300,
    fontFamily: fonts.nunitoBold,
    color: colors.textColor
  }
})
