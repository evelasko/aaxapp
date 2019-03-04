import React from 'react';
import { AllNewsQuery_allNews } from '../../../schemaTypes';
interface Props {
    alerts: AllNewsQuery_allNews[];
    pushDetails: (id: string, title: string) => void;
}
export declare const AlertScroll: React.FC<Props>;
export {};
