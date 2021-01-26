import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import { colorGrade } from './colors/colors';

const theme = createMuiTheme({
  background: {
    image: '/background.png',
    image2: '/background2.jpg',
  },
  palette: {
    primary: {
      main: colorGrade.green[1],
      light: colorGrade.green[4],
      dark: colorGrade.green[0],
      text: colorGrade.green[3],
      text2: colorGrade.green[2],
      white: '#fff',
      black: '#000',
    },
    secondary: {
      main: colorGrade.blue[1],
      light: colorGrade.blue[4],
      dark: colorGrade.blue[0],
      text: colorGrade.blue[3],
      dark: colorGrade.blue[2],
      white: '#fff',
      black: '#000',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
