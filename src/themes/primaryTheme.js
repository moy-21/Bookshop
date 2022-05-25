import { createTheme } from "@mui/material/styles";

export const themeOptions = {
    palette: {
      type: 'dark',
      primary: {
        main: '#81d9ff',
      },
      secondary: {
        main: '#b71c1c',
      },
    },
    props: {
      MuiTooltip: {
        arrow: true,
      },
    },
  };
  const theme=createTheme(themeOptions);
  export default theme