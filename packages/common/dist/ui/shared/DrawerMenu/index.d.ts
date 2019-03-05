import React from 'react';
import { DrawerItemsProps } from 'react-navigation';
export default class DrawerMenu extends React.Component<DrawerItemsProps> {
    navLink: (nav: string, text: string) => JSX.Element;
    render(): JSX.Element;
}
