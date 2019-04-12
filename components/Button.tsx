import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

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
