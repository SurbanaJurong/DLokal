import React from 'react';
import { View, ListView } from 'react-native';
import { ServiceItem } from './common/ServiceItem';

const styles = {
  container: {
    flex: 1,
  },
};

class LocationList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(props.services),
    };
  }

  renderRow(data) {
    return (
      <View>
        <ServiceItem item={data} />
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
      />
    );
  }
}

export default LocationList;
