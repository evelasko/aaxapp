import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { AppStore } from '../../store';
declare class Profile extends React.Component<NavigationScreenProps & {
    appStore: AppStore;
}> {
    state: {
        guest: boolean;
    };
    static navigationOptions: ({ navigation }: any) => {
        title: string;
        headerTransparent: boolean;
        animationEnabled: boolean;
        headerLeft: JSX.Element;
        headerBackground: JSX.Element;
        headerTitleStyle: {
            fontWeight: string;
        };
    };
    shiftUser: () => void;
    render(): JSX.Element;
}
export default Profile;
