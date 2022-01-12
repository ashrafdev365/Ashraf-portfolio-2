import Document, { Head, Html, NextScript, Main } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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

          <link rel="manifest" href="./manifest.json" />

          <meta name="title" content="Ashraf Personal Portfolio" />
          <meta
            name="description"
            content="Hi, I’m Ashraf I'm a Front-end developer have a good amount of coding experience, I create websites using React.js, and Next.js. I specialize in creating custom websites"
          />
          <meta
            name="keywords"
            content="Ashraf, ashraf, Ashraf Chowdhury, front end developer, developer, Upwork, Twitter, Linkedin, Github, devs, front end"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
        </Head>

        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
