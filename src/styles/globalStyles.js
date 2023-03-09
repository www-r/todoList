import { createGlobalStyle } from 'styled-components';
import './theme';
import KyoboHandwriting2021sjy from '../assets/fonts/KyoboHandwriting2021sjy';

export default createGlobalStyle`
    @font-face {
        font-family: "KyoboHandwriting2021sjy";
        src: url(${KyoboHandwriting2021sjy}) format('opentype');
    }
    color: ${theme.palette.darkblue};
`;
