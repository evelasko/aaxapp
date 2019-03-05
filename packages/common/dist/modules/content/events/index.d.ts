import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
interface Props {
}
declare class Events extends React.Component<Props & NavigationScreenProps> {
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
