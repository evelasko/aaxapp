import React from 'react';
interface Props {
    pushDetails: (id: string, title: string) => void;
    per?: string | null;
    headerHeight?: number | null;
    appState?: any;
}
declare class NewsComponent extends React.Component<Props> {
    render(): JSX.Element;
}
export default NewsComponent;
