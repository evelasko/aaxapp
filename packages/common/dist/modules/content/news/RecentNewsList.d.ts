import React from 'react';
import { AllNewsQuery_allNewsMobile } from '../../../schemaTypes';
interface Props {
    recents: AllNewsQuery_allNewsMobile[];
    pushDetails: (id: string, title: string) => void;
}
export declare const RecentNewsList: React.FC<Props>;
export {};
