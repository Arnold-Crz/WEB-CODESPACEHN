import Head from 'next/head';

import Contacto from './contacto/Contacto';
import DropUp from './DropUp';
import Footer from './footer/Footer';

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>
          Desarrollo Web Profesional {title ? `| ${title}` : 'inicio'}
        </title>
        <link rel="icon" href="/icocodespace.ico" />
        <link rel="canonical" href="https://codespacehn.netlify.app/" />
        <meta property="og:locale" content="es_HN" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Desarrollo y Diseño de paginas Web Profesionales HN."
        />
        <meta
          property="og:description"
          content="Desarrollo y Diseño de Paginas Web profesionales en Honduras, tiendas online, paginas webs informativas, paginas web de sevicios, e-commerce, paginas de productos, blogs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="www.codespacehn.netlify.app" />
        <meta
          property="og:site_name"
          content="Desarrollo y Diseño Web Profesional Honduras"
        />
        <meta
          name="viewpost"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no "
        />
        <meta name="HandheldFriendly" content="true" />
        <meta
          name="description"
          content="Desarrollo y Diseño de paginas web profesionales en todo Honduras, tiendas online, paginas webs informativas, paginas web de sevicios, e-commerce"
        />
      </Head>

      <DropUp />
      {children}
      <Contacto />
      <Footer />
    </>
  );
}

export default Layout;
