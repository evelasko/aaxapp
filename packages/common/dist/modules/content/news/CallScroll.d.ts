import React from 'react';
import { AllNewsQuery_allNews } from '../../../schemaTypes';
interface Props {
    calls: AllNewsQuery_allNews[];
    pushDetails: (id: string, title: string) => void;
}
export declare const CallScroll: React.FC<Props>;
export {};
