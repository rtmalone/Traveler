import React from 'react'
import { StyleSheet, TouchableHighlight, Dimensions, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class GridItem extends React.Component {
  state = {
    pressed: false
  }

  _onPress = () => {
    this.setState({ pressed: !this.state.pressed })
  }

  render() {
    const { item, posIndex } = this.props
    console.log(item)
    const height = Dimensions.get('window').width / 4
    return (
      <TouchableHighlight
        underlayColor="white"
        onPress={this._onPress}
        style={{ opacity: this.state.pressed ? 0.5 : 1 }}>
        <View style={[styles.itemContainer, { backgroundColor: item.code, height: height }]}>
          <Icon name={item.icon} size={40} color="white" />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{posIndex}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10
  },
  itemName: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '600'
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff'
  }
})
