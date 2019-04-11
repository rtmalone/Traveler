import React from 'react'
import { StyleSheet, TouchableHighlight, Dimensions, View, Text } from 'react-native'

export default class GridItem extends React.Component {
  state = {
    pressed: false
  }

  _onPress = () => {
    this.setState({ pressed: !this.state.pressed })
  }

  render() {
    const { item } = this.props
    const height = Dimensions.get('window').width / 4
    return (
      <TouchableHighlight
        underlayColor="white"
        onPress={this._onPress}
        style={{ opacity: this.state.pressed ? 0.5 : 1 }}>
        <View style={[styles.itemContainer, { backgroundColor: item.code, height: height }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 5
    // height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600'
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff'
  }
})
