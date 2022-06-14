import Image from 'next/image';
import styled from 'styled-components';

import * as C from '../../styles/variables';

import useScroll from '../../hooks/useScroll';

import img from '../../public/img/imginicio.png';
import css from '../../public/img/cssinicio.svg';
import html from '../../public/img/htmlinicio.svg';
import js from '../../public/img/jsinicio.svg';
import ContentLeft from './ContentLeft';

function Inicio() {
  const { animationScroll } = useScroll();

  return (
    <SectionInicio id="inicio">
      <ContentLeft />

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
