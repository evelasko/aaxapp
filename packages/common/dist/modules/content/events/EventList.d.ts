import React from 'react';
import { AllEventsQuery_events } from '../../../schemaTypes';
interface Props {
    events: AllEventsQuery_events[];
    pushDetails: (id: string, title: string) => void;
}
export declare const EventsList: React.FC<Props>;
export {};
