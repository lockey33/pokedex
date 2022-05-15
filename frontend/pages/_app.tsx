import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 994,
    xl: 1200
  },
  colors: {
    primary: '#1fc1c3',
    secondary: '#0b253c'
  }
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return(
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
