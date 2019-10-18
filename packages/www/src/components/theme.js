import { ThemeProvider } from 'styled-components';

export { ThemeProvider };

// Theme config
const theme = {
  grid: {
    size: 12,
    gutter: 10, // 10px
    outerMargin: 1,
    breakpoints: {
      xs: 0, // px
      sm: 768, // px
      md: 960, // px
      lg: 1200, // px
    },
  },
};

export default theme;
