import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { RouteComponentProps } from 'react-router';
interface Props extends RouteComponentProps<{
    news: string;
}> {
}
declare const NewsDetail: React.FC<Props & NavigationScreenProps>;
export default NewsDetail;
