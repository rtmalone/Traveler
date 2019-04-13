import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { colors, fonts } from '../theme'

type Props = {
  text: string
  navigateTo: string
} & NavigationScreenProps

export default function Button({ navigation, navigateTo, text }: Props) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.gold,
    width: 300,
    height: 65,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 20,
    borderRadius: 10
  },
  buttonText: {
    fontFamily: fonts.nunitoBold,
    // fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center'
  }
})
