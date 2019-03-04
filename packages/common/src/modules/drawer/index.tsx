import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import About from '../content/about/About';

const WIDTH = Dimensions.get('window').width

const DrawerConfig = { drawerWidth: WIDTH*0.83 }

const DrawerNavigator = createDrawerNavigator({
    About: { screen: About }  
}, DrawerConfig )