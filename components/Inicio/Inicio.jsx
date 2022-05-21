import Image from 'next/image';

import img from '../../public/img/inicioimg.svg';

import styles from '../../styles/inicio.module.scss';

function Inicio() {
  return (
    <section className={styles.wrapperinicio} id="inicio">
      <div className={styles.wrapperleft}>
        <h1>
          Desarrollo <span>Web</span>
          <br />
          Profesional
        </h1>
        <p>
          Diseñamos y desarrollamos paginas web <br />
          profesionales de la mas alta calidad.
          <br />
          Brindandote los mejores servicios para tu negocio
        </p>
        <a href="#contacto">Contacto</a>
      </div>

      <Image src={img} alt="imagendeinicio" />
    </section>
  );
}

export default Inicio;
