import { Component } from 'react';
interface Props {
    width?: number | null;
    height?: number | null;
    color?: string | null;
}
export default class PinIcon extends Component<Props> {
    render(): JSX.Element;
}
export {};
