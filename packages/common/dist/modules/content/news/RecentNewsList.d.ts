import React from 'react';
import { AllNewsQuery_allNews } from '../../../schemaTypes';
interface Props {
    recents: AllNewsQuery_allNews[];
    pushDetails: (id: string, title: string) => void;
}
export declare const RecentNewsList: React.FC<Props>;
export {};
