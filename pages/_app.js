import '../styles/globals.css';
import '../styles/pages/home/home.css';
import '../styles/pages/about/about.css';
import '../styles/pages/projects/projects.css';
import '../styles/pages/contact/contact.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossorigin="anonymous"
          />
        </Head> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
