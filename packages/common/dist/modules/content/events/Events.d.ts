import { History } from 'history';
import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
interface Props extends NavigationScreenProps {
    history?: History;
}
declare class Events extends React.Component<Props> {
    static navigationOptions: {
        title: string;
        headerBackground: JSX.Element;
        headerTransparent: boolean;
        headerTitleStyle: {
            fontWeight: string;
        };
    };
    pushDetails: (id: string, title: string) => void;
    render(): JSX.Element;
}
export default Events;
