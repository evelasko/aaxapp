import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { AppStore } from '../../store';
declare class Profile extends React.Component<NavigationScreenProps & {
    appStore: AppStore;
}> {
    render(): JSX.Element;
}
export default Profile;
