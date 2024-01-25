import 'styled-components';

import { ThemeDefault } from '@themes/ThemeDefault';

type TypeThemeDefault = typeof ThemeDefault;

declare module 'styled-components' {
  export interface DefaultTheme extends TypeThemeDefault {}
}
