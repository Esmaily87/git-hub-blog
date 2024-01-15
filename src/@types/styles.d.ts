// 6. Subscrevemos o tema padrão do Styed-Components e adicionamos a tipagem, depois criar os componentes que serao 
// chamados no app.tsx
import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType{}
}
