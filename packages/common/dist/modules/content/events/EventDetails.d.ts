import 'moment/min/locales';
import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { RouteComponentProps } from 'react-router';
interface Props extends RouteComponentProps<{
    event: string;
}> {
}
declare const EventDetails: React.FC<Props & NavigationScreenProps>;
export default EventDetails;
