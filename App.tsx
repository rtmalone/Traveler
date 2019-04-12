import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Home, Board, Alphabet } from './Screens'
const defaultNavOptions = {
  title: 'Traveler',
  headerStyle: {
    backgroundColor: '#f4511e',
    textAlign: 'center'
  },
  headerTitleStyle: { color: 'black' },
  headerTitleAllowFontScaling: false
}

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Alphabet: Alphabet,
    Board: Board
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: defaultNavOptions,
    headerMode: 'float',
    cardStyle: {
      flex: 1,
      backgroundColor: 'cornsilk'
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
