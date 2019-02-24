import { Component } from 'react';
interface Props {
    width?: number | null;
    height?: number | null;
    active?: boolean | null;
}
export default class NewsIcon extends Component<Props> {
    render(): JSX.Element;
}
export {};
