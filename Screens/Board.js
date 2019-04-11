import React from 'react'
import { FlatGrid } from 'react-native-super-grid'
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import GridItem from '../components/GridItem'

export default class Board extends React.Component {
  state = {
    items: [
      { name: 'TURQUOISE', code: '#1abc9c' },
      { name: 'EMERALD', code: '#2ecc71' },
      { name: 'PETER RIVER', code: '#3498db' },
      { name: 'AMETHYST', code: '#9b59b6' },
      { name: 'WET ASPHALT', code: '#34495e' },
      { name: 'GREEN SEA', code: '#16a085' },
      { name: 'NEPHRITIS', code: '#27ae60' },
      { name: 'BELIZE HOLE', code: '#2980b9' },
      { name: 'WISTERIA', code: '#8e44ad' },
      { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
      { name: 'SUN FLOWER', code: '#f1c40f' },
      { name: 'CARROT', code: '#e67e22' },
      { name: 'ALIZARIN', code: '#e74c3c' },
      { name: 'CLOUDS', code: '#ecf0f1' },
      { name: 'CONCRETE', code: '#95a5a6' },
      { name: 'ORANGE', code: '#f39c12' }
    ]
  }

  render() {
    return (
      <FlatGrid
        itemDimension={80}
        items={this.state.items}
        itemContainerStyle={{ flex: 1, justifyContent: 'center' }}
        style={styles.gridView}
        renderItem={(item) => <GridItem item={item} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  gridView: {
    // paddingTop: 50,
    // flex: 1
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
