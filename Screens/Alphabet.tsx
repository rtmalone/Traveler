import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import data from '../data.json'
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
        <TouchableOpacity activeOpacity={0.7} style={styles.target} onPress={this.changeLetter}>
          <Text style={styles.letter}>{data.alphabet[index]}</Text>
        </TouchableOpacity>
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
  target: {
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: colors.greenDark
  },
  letter: {
    fontSize: 300,
    fontFamily: fonts.nunitoBold,
    color: colors.textColor
  }
})
