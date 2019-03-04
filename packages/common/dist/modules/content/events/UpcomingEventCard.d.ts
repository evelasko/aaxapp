import React from 'react';
import { AllEventsQuery_events } from '../../../schemaTypes';
interface Props {
    upcomingEvent: AllEventsQuery_events;
    pushDetails: (id: string, title: string) => void;
}
export declare const UpcomingEventCard: React.FC<Props>;
export {};
