import React from 'react';
interface Props {
    notifications?: any;
}
export default class AppContainer extends React.Component<Props> {
    componentDidMount(): void;
    _handleNotification: (notification: any) => void;
    render(): JSX.Element;
}
export {};
