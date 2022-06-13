import Image from 'next/image';

import styled from 'styled-components';
import * as C from '../../styles/variables';

import img from '../../public/img/imginicio.png';
import css from '../../public/img/cssinicio.svg';
import html from '../../public/img/htmlinicio.svg';
import js from '../../public/img/jsinicio.svg';
import useScroll from '../../hooks/useScroll';

function Inicio() {
  const { animationScroll } = useScroll();

  return (
    <SectionInicio id="inicio">
      <div className={` wrapperleft ${animationScroll}`}>
        <h1>
          Desarrollo <span>Web</span>
          <br />
          Profesional
        </h1>
        <h2>
          Hola👋, en Code<span>Space</span>.
        </h2>
        <p>
          Diseñamos y Desarrollamos Páginas Web profesionales a la medida de la
          más alta calidad.
          <br />
          Brindándote los mejores servicios para tu negocio.
        </p>
        <a href="#contacto">Contacto</a>
      </div>
      <WrapperImg className={`${animationScroll}`}>
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
          <a
            href="https://api.whatsapp.com/send/?phone=50498145165&text=👋Hola Buen dia. Estoy interes@ en trabajar juntos, en un proyecto. 🚀"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://www.instagram.com/codespace_hn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/arnold-cruz-b9aa81204/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Arnold-Crz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </WrapperImg>
    </SectionInicio>
  );
}

const SectionInicio = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  .wrapperleft {
    h1 {
      font-size: 2.8rem;

      @media (max-width: 768px) {
        text-align: center;
        font-size: 3rem;
        line-height: 45px;
        margin-bottom: 20px;
        color: ${C.COLOR_CAFE};
      }

      & span {
        background: linear-gradient(144deg, #f67d0e, #f6580e 40%, #f6ad0e);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    h2 {
      color: ${C.COLOR_CAFE};
      margin: 10px 0;
      margin-left: 25px;
      @media screen and (min-width: 768px) {
        margin-left: 0;
      }
      span {
        background: linear-gradient(144deg, #f67d0e, #f6580e 40%, #f6ad0e);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
        font-size: 1rem;
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

        @media screen and (max-width: 768px) {
          height: 100px;
        }
      }
    }

    a {
      display: flex;
      justify-content: center;
      width: 120px;
      border-radius: 5px;
      margin-top: 10px;
      background-color: ${C.COLOR_BLANCCO_PURO};
      border: 3px solid ${C.COLOR_BLANCCO_PURO};
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
      padding: 10px;
      color: ${C.COLOR_NARANJA};
      font-size: 1rem;
      font-weight: 600;
      transition: 0.3s;

      @media (max-width: 768px) {
        margin-left: 10px;
      }

      &:hover {
        border: 3px solid ${C.COLOR_NARANJA};
        border-radius: 5px;
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
