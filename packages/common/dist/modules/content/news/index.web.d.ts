import React from 'react';
import { RouteComponentProps } from 'react-router';
interface Props {
}
declare class News extends React.Component<Props & RouteComponentProps> {
    pushDetails: (id: string, title: string) => void;
    render(): JSX.Element;
}
export default News;
