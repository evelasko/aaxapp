import React from 'react';
import { AllNewsQuery_allNewsMobile } from '../../../../schemaTypes';
interface Props {
    calls: AllNewsQuery_allNewsMobile[];
    pushDetails: (id: string, title: string) => void;
}
declare const CallList: React.FC<Props>;
export default CallList;
