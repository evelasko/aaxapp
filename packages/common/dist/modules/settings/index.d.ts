import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { AppStore } from '../../store';
declare class Settings extends React.Component<NavigationScreenProps & {
    appStore: AppStore;
}> {
    render(): JSX.Element;
}
export default Settings;
