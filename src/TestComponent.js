
import { TabNavigator } from 'react-navigation';
import GridView from './components/GridView';
import ServiceRequest from './ServiceRequest';
import MapWithList from './MapWithList';
import Messanger from './Messanger';
import Profile from './components/Profile';

const TestComponent = TabNavigator({
  Job2: { screen: GridView },
  Job3: { screen: ServiceRequest },
  Job4: { screen: MapWithList },
  Job5: { screen: Messanger },
  Job6: { screen: Profile },
},
 { tabBarPosition: 'bottom',
 tabBarOptions: {
    activeTintColor: '#ffffff',
    labelStyle: {
      fontSize: 8.5,
      marginLeft: -5,
      marginRight: -5,
      marginBottom: -2
    },
    style: {
      backgroundColor: '#778899',
    },
    showLabel: true,
    showIcon: true,
    pressColor: 'black'
  }
});


TestComponent.navigationOptions = {
  title: 'Dashboard',
  header: null,

};

export default TestComponent;
