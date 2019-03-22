import React from 'react';
import { AllNewsQuery_allNewsMobile } from '../../../schemaTypes';
interface Props {
    featuredNews: AllNewsQuery_allNewsMobile;
    pushDetails: (id: string, title: string) => void;
}
export declare const FeaturedNewsCard: React.FC<Props>;
export {};
