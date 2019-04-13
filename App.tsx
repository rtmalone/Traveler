import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Home, Board, Alphabet } from './Screens'
import { colors, fonts } from './theme'

const defaultNavOptions = {
  title: 'Traveler',
  headerStyle: {
    backgroundColor: colors.greenDark,
    textAlign: 'center'
  },
  headerTitleStyle: { fontFamily: fonts.nunitoRegular, color: colors.textColor },
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
      backgroundColor: colors.greenLight
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
