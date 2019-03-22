import React from 'react';
import { AllEventsQuery_eventsMobile } from '../../../schemaTypes';
interface Props {
    upcomingEvent: AllEventsQuery_eventsMobile;
    pushDetails: (id: string, title: string) => void;
}
export declare const UpcomingEventCard: React.FC<Props>;
export {};
