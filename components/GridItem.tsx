import React, { PureComponent } from 'react'
import { StyleSheet, TouchableOpacity, Dimensions, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { GridItemType } from '../types'
import { colors, fonts } from '../theme'

interface Props {
  posIndex: number
  item: GridItemType
}

export default class GridItem extends PureComponent<Props> {
  state = {
    pressed: false
  }

  _onPress = () => {
    this.setState({ pressed: !this.state.pressed })
  }

  render() {
    const { item, posIndex } = this.props
    const { pressed } = this.state
    const height = Dimensions.get('window').width / 4
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={this._onPress} style={{ flex: 1 }}>
        <View
          style={[
            styles.itemContainer,
            { backgroundColor: pressed ? colors.blueDark : colors.blue, height: height }
          ]}>
          <Icon name={item.icon} size={40} color="white" />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{posIndex}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 5,
    padding: 6,
    margin: 5
  },
  itemName: {
    fontSize: 14,
    color: colors.textColor,
    fontFamily: fonts.nunitoRegular
  },
  itemCode: {
    fontFamily: fonts.nunitoBold,
    fontSize: 12,
    color: colors.textColor
  }
})
