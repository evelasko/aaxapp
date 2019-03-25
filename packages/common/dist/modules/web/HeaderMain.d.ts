import React from 'react';
interface Props {
    goBack?: () => void;
    goLogin?: () => void;
    goProfile?: () => void;
    goMenu?: () => void;
    title?: string;
}
declare const HeaderMain: React.FC<Props>;
export default HeaderMain;
