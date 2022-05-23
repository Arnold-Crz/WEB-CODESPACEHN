import styled from 'styled-components';

import * as C from '../../styles/variables';

function Footer() {
  return (
    <Wrapperfooter>
      <h2>
        Code <span>Space</span>
      </h2>
      <p>Soluciones Tecnologicas</p>

      <div className="wrapper_item">
        <div className="wrapper_item_nosotros">
          <h3>Sobre CodeSpace</h3>
          <p>
            CodeSpace es una idea que nace y busca implementar nuevas formas de
            administrar su información y mostrarla al público. Donde dan a
            conocer todos aquellos servicios o productos que sean de su interés.
            este proyecto nace para aquellas pequeñas y medianas empresas que
            buscan tener un espacio en la web.
          </p>
        </div>
        <div className="wrapper_item_servicios">
          <h3>Servicios</h3>
          <ul>
            <li>Páginas de Servicios</li>
            <li>Blog Informativos</li>
            <li>Landing Pages</li>
            <li>Administrador y Desarollador de Páginas Webs</li>
            <li>Adminitrador de CMS</li>
            <li>E-Commerce</li>
            <li>Diseño Web</li>
          </ul>
        </div>
        <div className="wrapper_item_contacto">
          <h3>Contacto</h3>
          <div>
            <div>
              <p>Correo</p>
              <a href="mailto:arnoldcrzdev@gmail.com">arnoldcrzdev@gmail.com</a>
            </div>
            <div>
              <p>Telefono/Whatsapp</p>
              <a href="tel:3303-8039">+504 3303-8039</a>
            </div>
          </div>
        </div>
        <div className="wrapper_item_social">
          <h3>Redes Sociales</h3>
          <div>
            <a href="https://www.facebook.com/codespacehn/">
              <i
                className="bx bxl-facebook-square"
                style={{ color: '#fffcfc', fontSize: '2.5rem' }}
              ></i>
            </a>
            <a href="https://www.instagram.com/codespace_hn/">
              <i
                className="bx bxl-instagram"
                style={{ color: '#fffcfc', fontSize: '2.5rem' }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </Wrapperfooter>
  );
}

const Wrapperfooter = styled.footer`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  background-color: ${C.COLOR_NEGRO};
  display: grid;
  grid-template-columns: 300px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 600px) {
    display: block;
  }
  h2 {
    margin-top: 20px;
    font-size: 3rem;
    color: ${C.COLOR_BLANCO};
    span {
      color: ${C.COLOR_NARANJA};
    }
    @media screen and (min-width: 600px) {
      margin-left: 20px;
    }
  }
  > p {
    font-size: 1.3rem;
    color: ${C.COLOR_BLANCO};
    margin-bottom: 20px;
    @media screen and (min-width: 600px) {
      margin-left: 20px;
    }
  }
  .wrapper_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 768px) {
      width: 100%;
      display: grid;
      column-gap: 40px;
      grid-template-columns: 400px 350px 200px 200px;
      margin-bottom: 20px;
    }

    .wrapper_item_nosotros {
      margin-top: 20px;
      width: 100%;
      h3 {
        font-size: 1.8rem;
        color: ${C.COLOR_BLANCO};
      }

      p {
        font-size: 1rem;
        color: ${C.COLOR_BLANCO};
      }
      @media screen and (min-width: 600px) {
        display: grid;
        grid-template-rows: 50px 200px;
      }
    }

    .wrapper_item_servicios {
      margin-top: 20px;
      width: 100%;
      h3 {
        font-size: 1.8rem;
        color: ${C.COLOR_BLANCO};
      }

      li {
        font-size: 1rem;
        color: ${C.COLOR_BLANCO};

        ::marker {
          color: ${C.COLOR_NARANJA};
        }
      }
      @media screen and (min-width: 600px) {
        display: grid;
        grid-template-rows: 50px 200px;
      }
    }

    .wrapper_item_contacto {
      margin-top: 20px;
      width: 100%;
      h3 {
        font-size: 1.8rem;
        color: ${C.COLOR_BLANCO};
      }

      div {
        p:nth-of-type(1) {
          font-size: 1.2rem;
          color: ${C.COLOR_BLANCO};
        }
        a {
          font-size: 1rem;
          color: ${C.COLOR_BLANCO};
        }
      }
      @media screen and (min-width: 600px) {
        display: grid;
        grid-template-rows: 50px 200px;
      }
    }

    .wrapper_item_social {
      margin-top: 20px;
      width: 100%;
      h3 {
        font-size: 1.8rem;
        color: ${C.COLOR_BLANCO};
      }
      div {
        margin-top: 40px;
        display: flex;
        gap: 20px;

        a {
          width: 20%;
          color: ${C.COLOR_BLANCO};
        }
      }
      @media screen and (min-width: 600px) {
        display: grid;
        grid-template-rows: 50px 200px;
      }
    }
  }
`;
export default Footer;
