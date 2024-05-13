import Container from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from '../components/Home/Home';

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5"  // Set your desired background color here
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#red',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          width: '100vw',
          height: '100vh',
          bgcolor: 'background.default',
          align: 'center',
          justifyContent: 'center',
          padding: '2em',
        }}
      >
        <Home/>
      </Container>
    </ThemeProvider >
  );
}