import { Dimensions } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import About from '../content/about/About';
import Policy from '../content/policy/Policy';
import Support from '../content/support/Support';

// ----------------------------------------- DRAWER STACK
const WIDTH = Dimensions.get('window').width

const Drawer = createDrawerNavigator(
    { 
        Nosotros: { screen: About },
        Soporte: { screen: Support },
        Privacidad: { screen: Policy } 
    }, 
    { 
        drawerPosition: 'left', 
        drawerWidth: WIDTH*0.83,
        // contentComponent: ({navigation}:DrawerItemsProps) => <DrawerMenu navigation={navigation}/> , 
        initialRouteName: 'About' 
    }
)
export const MenuNavigator = createAppContainer(Drawer)
