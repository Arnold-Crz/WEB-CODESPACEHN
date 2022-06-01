import { getProject, getProjectFromTitle } from '../../helper';
import Layout from '../../components/Layout';

import styled from 'styled-components';
import * as C from '../../styles/variables';

import Link from 'next/link';
import Image from 'next/image';

function ProjectPage({ data }) {
  console.log(data);
  const {
    project: {
      titulo,
      descripcion,
      imgs,
      sizeImg: { width, height },
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
            href={`https://api.whatsapp.com/send/?phone=50498145165&text=👋Hola, Buen dia. Estoy interes@ en el proyecto ${titulo}.🚀`}
          >
            Cotizar
          </a>
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
    font-size: 3.5rem;
    color: ${C.COLOR_NEGRO};
    @media screen and (min-width: 768px) {
      text-align: start;
    }
    span {
      color: ${C.COLOR_NARANJA};
    }
  }
  p {
    text-align: center;
    font-size: 1.5rem;
    @media screen and (min-width: 768px) {
      width: 80%;
      text-align: start;
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
  justify-content: center;
  gap: 10px;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
  a {
    display: flex;
    justify-content: center;
    width: 200px;
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

export async function getStaticPaths() {
  const paths = await getProjectFromTitle();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;

  const data = await getProject(id);

  return {
    props: {
      data,
    },
  };
}

export default ProjectPage;
