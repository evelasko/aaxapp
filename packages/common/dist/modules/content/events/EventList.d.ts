import React from 'react';
import { AllEventsQuery_eventsMobile } from '../../../schemaTypes';
interface Props {
    events: AllEventsQuery_eventsMobile[];
    pushDetails: (id: string, title: string) => void;
}
export declare const EventsList: React.FC<Props>;
export {};
