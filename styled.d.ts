// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {

    background: string;
    color: string;
    subtitle: string;
    border: string;

    
  }
}