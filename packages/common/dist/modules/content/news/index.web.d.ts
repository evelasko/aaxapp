import React from 'react';
import { RouteComponentProps } from 'react-router';
interface Props extends RouteComponentProps {
}
declare class News extends React.Component<Props> {
    pushDetails: (id: string, title: string) => void;
    render(): JSX.Element;
}
export default News;
