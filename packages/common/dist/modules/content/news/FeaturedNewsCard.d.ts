import React from 'react';
import { AllNewsQuery_allNews } from '../../../schemaTypes';
interface Props {
    featuredNews: AllNewsQuery_allNews;
    pushDetails: (id: string, title: string) => void;
}
export declare const FeaturedNewsCard: React.FC<Props>;
export {};
