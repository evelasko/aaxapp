import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { AppStore } from '../../store';
interface Props extends NavigationScreenProps {
}
export default class Login extends React.Component<Props & {
    appStore: AppStore;
}> {
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
export {};
