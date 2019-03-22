import React from 'react';
interface Props {
    latlng: {
        latitude: number;
        longitude: number;
    };
}
export default class EventMap extends React.Component<Props> {
    render(): JSX.Element;
}
export {};
