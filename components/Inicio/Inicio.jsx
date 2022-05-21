import Image from 'next/image';

import styled from 'styled-components';
import * as C from '../../styles/variables';

import img from '../../public/img/imginicio.png';
import css from '../../public/img/cssinicio.svg';
import html from '../../public/img/htmlinicio.svg';
import js from '../../public/img/jsinicio.svg';

function Inicio() {
  return (
    <Wrappersection id="inicio">
      <div className="wrapperleft">
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
      <WrapperImg>
        <Image
          placeholder="blur"
          property="true"
          src={img}
          alt="imagendeinicio"
        />

        <div className="css">
          <Image src={css} alt="cssimage" width={70} height={70} />
        </div>

        <div className="html">
          <Image src={html} alt="htmlimage" width={70} height={70} />
        </div>
        <div className="js">
          <Image src={js} alt="jsimage" width={70} height={70} />
        </div>

        <div className="wrapper_social">
          <a href="#">
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="#">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </WrapperImg>
    </Wrappersection>
  );
}

const Wrappersection = styled.section`
  width: 100%;
  margin: 20px auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 90%;
  }

  .wrapperleft {
    h1 {
      font-size: 2.8rem;

      @media (max-width: 768px) {
        text-align: center;
        font-size: 3rem;
        line-height: 45px;
        margin-bottom: 20px;
        color: ${C.COLOR_NEGRO};
      }

      & span {
        color: ${C.COLOR_NARANJA};
      }
    }

    p {
      position: relative;
      font-size: 1.1rem;
      font-weight: 400;
      color: ${C.COLOR_NEGRO};

      @media (max-width: 768px) {
        padding: 5px;
        margin-left: 25px;
        font-size: 1.1rem;
      }

      &::after {
        content: '';
        position: absolute;
        left: -15px;
        top: 0;
        width: 5px;
        height: 75px;
        background-color: ${C.COLOR_NARANJA};
        border-radius: 3px;
      }
    }

    a {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 115px;
      margin-top: 10px;
      background: ${C.COLOR_NARANJA};
      padding: 10px;
      color: ${C.COLOR_BLANCO};
      border-radius: 5px;
      pointer-events: auto;
      transition: 0.5s ease-in-out;
      cursor: pointer;

      @media (max-width: 768px) {
        margin-left: 10px;
      }

      &:hover {
        color: ${C.COLOR_BLANCO};
        background-color: ${C.COLOR_CAFE};
      }
    }
  }
`;

const WrapperImg = styled.div`
  position: relative;
  width: 500px;
  @media (max-width: 768px) {
    width: 300px;
  }

  .css,
  .js,
  .html {
    position: absolute;
  }
  .css {
    right: 10px;
    top: 250px;
    animation: moveone 2s infinite;
    @media (max-width: 768px) {
      right: 0;
      top: 200px;
    }
  }
  .html {
    right: 425px;
    top: 300px;
    animation: movetwo 2s infinite;
    @media (max-width: 768px) {
      right: 220px;
      top: 200px;
    }
  }
  .js {
    left: 190px;
    top: 13px;
    animation: moveone 2s infinite;
    @media (max-width: 768px) {
      left: 120px;
      top: 0;
    }
  }
  @keyframes moveone {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, -5px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes movetwo {
    0% {
      transform: translate(0, -5px);
    }
    50% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, -5px);
    }
  }

  .wrapper_social {
    bottom: -50px;
    left: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 50px;
    width: 100%;
    i {
      font-size: 2.4rem;
      color: ${C.COLOR_NEGRO};
      &:hover {
        color: ${C.COLOR_GRIS};
      }
    }
  }
`;

export default Inicio;
