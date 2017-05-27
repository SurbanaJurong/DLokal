import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { View } from 'react-native';

class DateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { date: '2016-05-15' };
  }

  onDateChange(date) {
    this.setState({ date });
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
      <DatePicker
        style={styles.mainStyle}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2017-05-27"
        maxDate="2017-06-27"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={styles.customStyles}
        onDateChange={this.onDateChange.bind(this)}
      />
      <DatePicker
        style={styles.mainStyle}
        date={this.state.date}
        mode="time"
        placeholder="select date"
        format="hh:mm"
        minDate="2017-05-27"
        maxDate="2017-06-27"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={styles.customStyles}
        onDateChange={this.onDateChange.bind(this)}
      />
      </View>

    );
  }
}

const styles = {
  mainStyle: {
    width: 200,
    justifyContent: 'center'
  },

  customStyle: {
    dateIcon: {
      position: 'absolute',
      left: 0,
      top: 4,
      marginLeft: 0
    },
    dateInput: {
      marginLeft: 36
    }
  }
};


export default DateTimePicker;
