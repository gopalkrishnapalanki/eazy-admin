import { BrowserRouter } from 'react-router-dom';

import Router from './Router/router';
// theme
import ThemeProvider from './theme';




export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

    </ThemeProvider>
  );
}