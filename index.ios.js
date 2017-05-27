import { AppRegistry } from 'react-native';

import { StackNavigator } from 'react-navigation';
import App from './src/app';
import FindServices from './src/FindServices';
import TestComponent from './src/TestComponent';
import ServiceAdd from './src/ServiceAdd';
import IndividualService from './src/components/IndividualService';
import GridView from './src/components/GridView';
import MyService from './src/components/MyService';
import ServiceRequest from './src/ServiceRequest';
import Payments from './src/Payments';
import FindServicesFood from './src/FindServicesFood';
//import Map from './src/components/map';


 export const MainApp = StackNavigator({
   Login: { screen: App },
   Job1: { screen: TestComponent },
   ServiceAdd: { screen: ServiceAdd },
   IndividualService: { screen: IndividualService },
   MyService: { screen: MyService },
//import Test from './src/TestingFile';
   AdvertisedServiceData: { screen: ServiceRequest },
   FindServices: { screen: FindServices },
   FindFood: { screen: FindServicesFood },
   GridView: { screen: GridView },
   Payment: { screen: Payments }
  }
);


AppRegistry.registerComponent('auth', () => MainApp);
