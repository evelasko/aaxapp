import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { RouteComponentProps } from 'react-router';
interface Props extends RouteComponentProps {
}
declare class News extends React.Component<Props & NavigationScreenProps> {
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
export default News;
