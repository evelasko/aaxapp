import React from 'react';
interface Props {
    navigation: any;
}
export default class DrawerMenu extends React.Component<Props> {
    navLink: (nav: string, text: string) => JSX.Element;
    render(): JSX.Element;
}
export {};
