import { getProject, getProjectFromTitle } from '../../helper';
import Layout from '../../components/Layout';

import styled from 'styled-components';
import * as C from '../../styles/variables';

import Link from 'next/link';
import Image from 'next/image';

function ProjectPage({ data }) {
  const {
    project: { titulo, descripcion, imgs },
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
          <a href="#">Cotizar</a>
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
            <div className="img">
              <Image
                src={primeraImg}
                width={500}
                height={400}
                layout="responsive"
                alt={titulo}
                priority="false"
              />
            </div>
            <div className="img">
              <Image
                src={segundaImg}
                width={500}
                height={400}
                layout="responsive"
                alt={titulo}
                priority="false"
              />
            </div>
            <div className="img">
              <Image
                src={terceraImg}
                width={500}
                height={400}
                layout="responsive"
                alt={titulo}
                priority="false"
              />
            </div>
            <div className="img">
              <Image
                src={cuartaImg}
                width={500}
                height={400}
                layout="responsive"
                alt={titulo}
                priority="false"
              />
            </div>
            <div className="img">
              <Image
                src={quintaImg}
                width={500}
                height={400}
                layout="responsive"
                alt={titulo}
                priority="false"
              />
            </div>
            <div className="img">
              <Image
                src={sextaImg}
                width={500}
                height={400}
                layout="responsive"
                alt={titulo}
                priority="false"
              />
            </div>
          </div>
        </WrapperImgs>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  margin-top: 30px;
  h1 {
    font-size: 3.5rem;
    color: ${C.COLOR_NEGRO};
    span {
      color: ${C.COLOR_NARANJA};
    }
  }
  p {
    width: 80%;
    font-size: 1.5rem;
  }

  .d_uno,
  .d_dos {
    position: absolute;

    z-index: -1;
  }

  .d_uno {
    left: -30px;
    top: 0;
    width: 300px;
    height: 400px;
  }

  .d_dos {
    right: -20px;
    top: 0;
    width: 350px;
    height: 500px;
  }
`;

const WrappersBtn = styled.div`
  display: flex;
  justify-content: space-between;
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 100px;
  }

  .img {
    transform: scale(1);
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.1);
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
