import { Component } from 'react';
import { NavigationScreenProps } from 'react-navigation';
export default class DrawerScreen extends Component<NavigationScreenProps> {
    navigateToScreen: (route: string) => () => void;
    render(): JSX.Element;
}
