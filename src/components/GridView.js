import React from 'react';
import { View, ListView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
// import GridView from 'react-native-grid-view';
import { CategoryItem } from './common/CategoryItem';
import { Header2 } from './common';
import Categories from '../database/categories.json';

// const renderCategory = (category) => {
//   return (
//     <CategoryItem {...category} />
//   );
// };
//
// export const CategoryList = (Categories) => {
//   for (let i = 0; i < Categories.length; i++) {
//     if (i % 2 !== 0) {
//       renderCategory(Categories[i])
//     }
//   }
// }

const styles = {
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    flex: 1,
    height: 25,
    width: 25
  }
};

class GridView extends React.Component {
  static navigationOptions = {
    title: 'View Category',
    tabBarLabel: 'Categories',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="grid" size={30} color={tintColor} />
    ),
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(Categories)
    };
  }

  renderRow(data) {
    const { navigate } = this.props.navigation;

    console.log(data[0]);
    const first = data[0];
    const second = data[1];
    return (
      <View style={styles.row}>
        <TouchableOpacity onPress={() => { navigate('FindFood'); }} style={{ flex: 1 }}>
          <CategoryItem {...first} >{navigate} </CategoryItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigate('FindServices'); }} style={{ flex: 1 }}>
          <CategoryItem {...second} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      <Header2 headerText='Categories' />
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
      </View>
    );
  }
}

export default GridView;
