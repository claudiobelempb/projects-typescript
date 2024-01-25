import 'styled-components';

import { ThemeDefault } from '@typesDefault/ThemeDefault';

type TypeThemeDefault = typeof ThemeDefault;

declare module 'styled-components' {
  export interface DefaultTheme extends TypeThemeDefault {}
}
