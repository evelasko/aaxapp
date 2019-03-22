import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { RouteComponentProps } from 'react-router';
interface Props extends RouteComponentProps<{
    key: string;
}> {
}
declare const EmailConfirm: React.FC<Props & NavigationScreenProps>;
export default EmailConfirm;
