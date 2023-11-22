import 'styled-components';
import { Color, Typography } from './theme';

// TS 코드의 타입 추론을 돕는 타입 선언 파일
declare module 'styled-components' {
  export interface DefaultTheme {
    // 타입 지정
    color: Color;
    typography: Typography;
  }
}
