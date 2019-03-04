import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { RouteComponentProps } from 'react-router';
interface Props extends RouteComponentProps {
}
declare class News extends React.Component<Props & NavigationScreenProps> {
    static navigationOptions: {
        title: string;
        headerBackground: JSX.Element;
        headerTransparent: boolean;
        headerTitleStyle: {
            fontWeight: string;
        };
        headerLeft: JSX.Element;
    };
    pushDetails: (id: string, title: string) => void;
    render(): JSX.Element;
}
export default News;
