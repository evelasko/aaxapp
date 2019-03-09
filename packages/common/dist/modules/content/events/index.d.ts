import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { AppStore } from '../../../store';
interface Props {
}
declare class Events extends React.Component<Props & NavigationScreenProps & {
    appStore: AppStore;
}> {
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
    pushDetails: (id: string, title: string) => void;
    render(): JSX.Element;
}
export default Events;
