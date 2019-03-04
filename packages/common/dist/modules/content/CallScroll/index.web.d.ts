import { History } from 'history';
import React from 'react';
import { AllNewsQuery_allNews } from '../../../schemaTypes';
interface Props {
    calls: AllNewsQuery_allNews[];
    history: History;
}
export declare const CallScroll: React.FC<Props>;
export {};
