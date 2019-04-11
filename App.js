import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Home, Board, Alphabet } from './Screens'
import { Nav } from './components/Nav'

const config = {
  initialRouteName: 'Home',
  cardStyle: {
    flex: 1,
    backgroundColor: 'cornsilk'
  },
  headerMode: 'float'
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
      // navigationOptions: {
      //   header: null
      // }
    },
    Alphabet: {
      screen: Alphabet,
      navigationOptions: ({ navigation }) => ({
        header: <Nav navigation={navigation} />
      })
    },
    Board: {
      screen: Board,
      navigationOptions: ({ navigation }) => ({
        header: <Nav navigation={navigation} />
      })
    }
  },
  config
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
