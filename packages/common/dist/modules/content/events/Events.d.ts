import { History } from 'history';
import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
interface Props extends NavigationScreenProps {
    history?: History;
}
declare class Events extends React.Component<Props> {
    static navigationOptions: {
        title: string;
        headerStyle: {
            backgroundColor: string;
        };
        headerTintColor: string;
        headerTitleStyle: {
            fontWeight: string;
        };
    };
    pushDetails: (id: string, title: string) => void;
    render(): JSX.Element;
}
export default Events;
