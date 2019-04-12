import React from 'react'
import { FlatGrid } from 'react-native-super-grid'
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import GridItem from '../components/GridItem'

export default class Board extends React.Component {
  state = {
    items: [
      { id: 1, icon: 'motorcycle', name: 'motorcycle', code: '#1abc9c' },
      { id: 2, icon: 'flag', name: 'flag', code: '#2ecc71' },
      { id: 3, icon: 'bus', name: 'bus', code: '#3498db' },
      { id: 4, icon: 'train', name: 'train', code: '#9b59b6' },
      { id: 5, icon: 'truck', name: 'truck', code: '#34495e' },
      { id: 6, icon: 'plane', name: 'plane', code: '#16a085' },
      { id: 7, icon: 'bell', name: 'bell', code: '#27ae60' },
      { id: 8, icon: 'mobile', name: 'cell phone', code: '#2980b9' },
      { id: 9, icon: 'trash', name: 'trash can', code: '#8e44ad' },
      { id: 10, icon: 'bicycle', name: 'bicycle', code: '#2c3e50' },
      { id: 11, icon: 'car', name: 'car', code: '#f1c40f' },
      { id: 12, icon: 'building', name: 'tall building', code: '#e67e22' },
      { id: 13, icon: 'home', name: 'home', code: '#e74c3c' },
      { id: 14, icon: 'child', name: 'child', code: '#ecf0f1' },
      { id: 15, icon: 'hotel', name: 'hotel', code: '#95a5a6' },
      { id: 16, icon: 'ship', name: 'boat', code: '#f39c12' }
    ]
  }

  render() {
    return (
      <FlatGrid
        itemDimension={80}
        items={this.state.items}
        itemContainerStyle={{ flex: 1, justifyContent: 'center' }}
        style={styles.gridView}
        renderItem={({ item, index }) => <GridItem posIndex={index} item={item} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  gridView: {
    // paddingTop: 50,
    // flex: 1,
    // justifyContent: 'center'
  },
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
