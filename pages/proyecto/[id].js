import { useState, useEffect } from 'react';
import { getProject, getProjectFromTitle } from '../../helper';
import Layout from '../../components/Layout';

import styled from 'styled-components';
import * as C from '../../styles/variables';

import Link from 'next/link';
import Image from 'next/image';
import MockupPc from '../../components/MockupPc';
import MockupMovil from '../../components/MockupMovil';

function ProjectPage({ data }) {
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = () => {
      const media = window.matchMedia('(min-width: 768px)');
      if (media.matches) {
        setScreen(true);
      } else {
        setScreen(false);
      }
    };
    mediaQuery();
    window.addEventListener('resize', mediaQuery);

    return () => {
      window.removeEventListener('resize', mediaQuery);
    };
  }, []);

  const {
    project: {
      titulo,
      descripcion,
      imgs,
      demoUrl,
      sizeImg: { width, height },
      mockupPc: { img, logo, colorScroll },
      mockupMovil: { img1, img2 },
    },
  } = data;

  const { primeraImg, segundaImg, terceraImg, cuartaImg, quintaImg, sextaImg } =
    imgs[0];

  const TXT_START = titulo.slice(0, 11);
  const TXT_END = titulo.slice(11);
  return (
    <Layout title={titulo}>
      <Wrapper>
        <h1>
          {TXT_START}
          <span>{TXT_END}</span>
        </h1>
        <p>{descripcion}</p>
        <WrappersBtn>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://api.whatsapp.com/send/?phone=50498145165&text=👋Hola, Buen dia. Estoy interes@ en el proyecto ${titulo}.🚀`}
          >
            Cotizar
          </a>
          {demoUrl && (
            <a rel="noopener noreferrer" target="_blank" href={demoUrl}>
              Demo
            </a>
          )}
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </WrappersBtn>
        <div className="d_uno">
          <Image
            src={'/decoradores/decorador_uno.svg'}
            layout="fill"
            alt="decorador"
          />
        </div>
        <div className="d_dos">
          <Image
            src={'/decoradores/decorador_dos.svg'}
            layout="fill"
            alt="decorador"
          />
        </div>
        {screen && (
          <Container>
            <Descrption>
              <h1 className="mockup_title">
                Demo<span> en laptop</span>{' '}
              </h1>
              <p className="mockup_description">
                Navega por la pantalla del prototipo. Haz scroll en ella, así
                veras todo el contenido y como se visualizaría en una pantalla
                real.
              </p>
            </Descrption>
            <MockupPc completeImg={img} logo={logo} colorScroll={colorScroll} />
          </Container>
        )}
        <ContainerMockupMovil>
          <DescriptionMockupMovil>
            <h1></h1>
          </DescriptionMockupMovil>
          <MockupMovil img1={img1} img2={img2} />
        </ContainerMockupMovil>
        <WrapperImgs>
          <div className="grid_imgs">
            <ul className="img">
              <li>
                <Image
                  src={primeraImg}
                  width={width}
                  height={height}
                  layout="responsive"
                  alt={titulo}
                  priority="false"
                />
              </li>
              <li className="img">
                <Image
                  src={segundaImg}
                  width={width}
                  height={height}
                  layout="responsive"
                  alt={titulo}
                  priority="false"
                />
              </li>
              <li className="img">
                <Image
                  src={terceraImg}
                  width={width}
                  height={height}
                  layout="responsive"
                  alt={titulo}
                  priority="false"
                />
              </li>
              <li className="img">
                <Image
                  src={cuartaImg}
                  width={width}
                  height={height}
                  layout="responsive"
                  alt={titulo}
                  priority="false"
                />
              </li>
              <li className="img">
                <Image
                  src={quintaImg}
                  width={width}
                  height={height}
                  layout="responsive"
                  alt={titulo}
                  priority="false"
                />
              </li>
              <li className="img">
                <Image
                  src={sextaImg}
                  width={width}
                  height={height}
                  layout="responsive"
                  alt={titulo}
                  priority="false"
                />
              </li>
            </ul>
          </div>
        </WrapperImgs>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  h1 {
    text-align: center;
    font-size: 3rem;
    color: ${C.COLOR_NEGRO};
    @media screen and (min-width: 768px) {
      text-align: start;
      font-size: 3.5rem;
    }
    span {
      color: ${C.COLOR_NARANJA};
    }
  }
  p {
    padding: 10px;
    text-align: center;
    font-size: 1.2rem;
    @media screen and (min-width: 768px) {
      width: 80%;
      text-align: start;
      font-size: 1.5rem;
    }
  }

  .d_uno,
  .d_dos {
    position: absolute;
    z-index: -1;
  }

  .d_uno {
    left: -30px;
    top: 0;
    width: 200px;
    height: 300px;
    @media screen and (min-width: 768px) {
      width: 300px;
      height: 400px;
    }
  }

  .d_dos {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
      right: -20px;
      top: 0;
      width: 350px;
      height: 500px;
    }
  }
`;

const WrappersBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  a {
    display: flex;
    justify-content: center;
    width: 300px;
    border-radius: 15px;
    margin-top: 10px;
    background-color: ${C.COLOR_BLANCCO_PURO};
    border: 3px solid ${C.COLOR_BLANCCO_PURO};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    padding: 15px;
    color: ${C.COLOR_NARANJA};
    font-size: 1.5rem;
    font-weight: 600;
    transition: 0.3s;
    @media screen and (min-width: 768px) {
      width: 200px;
    }
    &:hover {
      border: 3px solid ${C.COLOR_NARANJA};
    }
  }
`;

const WrapperImgs = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  background-color: ${C.COLOR_BLANCCO_PURO};
  width: 90%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  .grid_imgs {
    padding-top: 50px;
    padding-bottom: 50px;
    width: 100%;
  }

  .img {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
    gap: 50px;
    justify-content: center;
    align-items: center;

    li {
      list-style: none;
      transition: transform 0.5s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 50px;
`;

const Descrption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 100%;
  border-radius: 20px;
  background-color: ${C.COLOR_BLANCCO_PURO};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  .mockup_title {
    position: relative;
    font-size: 2.5rem;
    color: ${C.COLOR_CAFE};
    margin-left: 10px;
    span {
      background: linear-gradient(144deg, #f67d0e, #f6580e 50%, #f6ad0e);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    ::before {
      bottom: 0;
      position: absolute;
      content: '';
      width: 100px;
      height: 5px;
      background-image: linear-gradient(144deg, #f67d0e, #f6580e 50%, #f6ad0e);
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  .mockup_description {
    font-size: 1rem;
    color: ${C.COLOR_CAFE};
  }
`;

const ContainerMockupMovil = styled.div`
  width: 100%;
`;

const DescriptionMockupMovil = styled.div`
  display: flex;
  flex-direction: column;
`;

export function getStaticPaths() {
  const paths = getProjectFromTitle();

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const id = params.id;

  const data = getProject(id);

  return {
    props: {
      data,
    },
  };
}

export default ProjectPage;
