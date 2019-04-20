import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { AppStore } from '../../store';
declare class Settings extends React.Component<NavigationScreenProps & {
    appStore: AppStore;
}> {
    state: {
        nod_News: boolean;
        noe_News: boolean;
        nod_Alert: boolean;
        noe_Alert: boolean;
        nod_Call: boolean;
        noe_Call: boolean;
        nod_Event: boolean;
        noe_Event: boolean;
    };
    render(): JSX.Element;
}
export default Settings;
