import styled from 'styled-components';
import Type from './Type';

import * as C from '../../styles/variables';

import useScroll from '../../hooks/useScroll';

function ContentLeft() {
  const { animationScroll } = useScroll();
  return (
    <Wrapper className={`${animationScroll}`}>
      <Title>
        <h1>
          <Type />
          <span className="web">
            {' '}
            Web <br />
            Profesional
          </span>
        </h1>
      </Title>
      <h2>
        Hola👋, somos Code<span>Space</span>.
      </h2>
      <p>
        Diseñamos y Desarrollamos Páginas Web profesionales a la medida de la
        más alta calidad.
        <br />
        Brindándote los mejores servicios para tu negocio.
      </p>
      <a href="#contacto">Contacto</a>
    </Wrapper>
  );
}

const Title = styled.div`
  display: flex;
  h1 {
    color: ${C.COLOR_NARANJA};
    font-size: 2.8rem;
    span {
      color: ${C.COLOR_NARANJA};
    }
  }
  .web {
    -webkit-text-fill-color: ${C.COLOR_CAFE};
    color: ${C.COLOR_CAFE};
  }
`;

const Wrapper = styled.div`
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
`;

export default ContentLeft;
