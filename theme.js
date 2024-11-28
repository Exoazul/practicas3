// theme.js
import { extendTheme } from 'native-base';

const theme = extendTheme({
  colors: {
    primary: '#6200EE',
    secondary: '#03DAC6',
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'full',
      },
    },
  },
});

export default theme;