import { CssBaseline, styled } from '@material-ui/core';
import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

// Use Material-ui as styled-components
const AppStyled = styled('div')({
  minHeight: '100vh',
  backgroundImage: `url(https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

export default function Home() {
  return (
    <AppStyled>
      <CssBaseline />
      <Head>
        <title>Amazing Content</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Head>
      <Header />
      <Main />
      <Footer />
    </AppStyled>
  );
}
