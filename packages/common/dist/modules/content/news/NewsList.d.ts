import React from 'react';
import { AllNewsQuery_allNews } from '../../../schemaTypes';
interface Props {
    newses: AllNewsQuery_allNews[];
    pushDetails: (id: string, title: string) => void;
}
declare const NewsList: React.FC<Props>;
export default NewsList;
