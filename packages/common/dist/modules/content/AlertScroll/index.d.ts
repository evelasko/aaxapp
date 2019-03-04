import { History } from 'history';
import React from 'react';
import { AllNewsQuery_allNews } from '../../../schemaTypes';
interface Props {
    alerts: AllNewsQuery_allNews[];
    history: History;
}
export declare const AlertScroll: React.FC<Props>;
export {};
