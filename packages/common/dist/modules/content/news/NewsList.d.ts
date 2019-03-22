import React from 'react';
import { AllNewsQuery_allNewsMobile } from '../../../schemaTypes';
interface Props {
    newses: AllNewsQuery_allNewsMobile[];
    pushDetails: (id: string, title: string) => void;
}
declare const NewsList: React.FC<Props>;
export default NewsList;
