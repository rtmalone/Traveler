import React, { PureComponent } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { StyleSheet, View } from 'react-native'
import Button from '../components/Button'

type Props = NavigationScreenProps

export default class Home extends PureComponent<Props> {
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
