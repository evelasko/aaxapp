import React from 'react';
import { AllNewsQuery_allNewsMobile } from '../../../schemaTypes';
interface Props {
    alerts: AllNewsQuery_allNewsMobile[];
    pushDetails: (id: string, title: string) => void;
}
export declare const AlertScroll: React.FC<Props>;
export {};
