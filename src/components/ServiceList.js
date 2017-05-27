// import React from 'react';
// import GridView from 'react-native-gridview';
// import { ServiceItem } from './common/ServiceItem';
//
//
// export default class ServiceList extends React.Component {
//   componentWillMount() {
//     const ds = new GridView.DataSource({
//       rowHasChanged: (r1, r2) => r1 !== r2
//     });
//
//     this.dataSource = ds.cloneWithRows(this.props.libraries);
//     console.log('HERE');
//     console.log(this.props.libraries);
//   }
//
//   renderRow(entry) {
//     console.log(entry);
//     return <ServiceItem entry={entry} />;
//   }
//
//   render() {
//     console.log('rendering');
//     console.log(this.rowData);
//     return (
//       <GridView
//         dataSource={this.dataSource}
//         itemsPerRow={2}
//         renderItem={this.renderRow}
//       />
//     );
//   }
// }
//
// //<Text>{`${item} (${sectionID}-${rowID}-${itemIndex}-${itemID})`}</Text>

import React from 'react';
import { View, ListView, TouchableOpacity } from 'react-native';
import { ServiceItem } from './common/ServiceItem';
import { SearchBar } from './common/SearchBar';
import { Button } from './common';

const styles = {
  container: {
    flex: 1,
  },
};

class ServiceList extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(props.libraries),
    };
  }

  renderRow(data) {
    const navigate = this.props.navigate;
    console.log('HERE', data.image);
    return (
      <View>
        <TouchableOpacity onPress={() => navigate(this.props.renderRole, { data })}>
          <ServiceItem item={data} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => <SearchBar />}
      />
    );
  }
}

export default ServiceList;
