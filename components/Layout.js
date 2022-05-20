import Head from 'next/head';
import Navbar from './Navbar';

function Layout({ children, title = '' }) {
  return (
    <>
      <Head>
        <title>Desarrollo Web Profesional - {title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Desarrollamos paginas web profesionales a nivel de occidente en Honduras"
        />
      </Head>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
