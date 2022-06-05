import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import styled from 'styled-components';

import TitleSection from '../TitleSection';
import * as C from '../../styles/variables';
import Proyecto from './Proyecto';

function Proyectos({ data }) {
  const variant = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        duration: 0.8,
      },
    },
  };

  return (
    <SectionProyectos id="proyectos">
      <TitleSection title={'P'} subtitle={'royectos'}></TitleSection>
      <h3>Ultimos Proyectos</h3>
      <WrapperCards initial="offscreen" whileInView="onscreen">
        {data &&
          data.map((proyecto) => (
            <Proyecto variant={variant} key={proyecto.id} proyecto={proyecto} />
          ))}
      </WrapperCards>

      <WrapperCardsWorks>
        <WrapperCard primary>
          <Image
            src={'/img/img_proyectos.png'}
            width={150}
            height={150}
            alt="Proyectos_Honduras"
          />
          <h2>Proyectos</h2>
          <p>Puedes ver algunos de nuestros Diseños ya desarrollados</p>
          <div className="hover_modal">
            <div>
              <h2>Ver Proyectos</h2>
              <Link href="/desarrollo">
                <a>
                  <i className="bx bx-link"></i>
                </a>
              </Link>
            </div>
          </div>
        </WrapperCard>
        <WrapperCard>
          <Image
            src={'/img/img_desing.png'}
            width={150}
            height={150}
            alt="Diseños_Honduras"
          />
          <h2>Diseños</h2>
          <p>Puedes ver algunos de nuestros Diseños.</p>
          <div className="hover_modal">
            <div>
              <h2>Ver Diseños</h2>
              <Link href="/desings">
                <a>
                  <i className="bx bx-link"></i>
                </a>
              </Link>
            </div>
          </div>
        </WrapperCard>
      </WrapperCardsWorks>
    </SectionProyectos>
  );
}

const SectionProyectos = styled.section`
  width: 100%;
  min-height: 100vh;
  h3 {
    margin-top: 50px;
    margin-left: 20px;
    font-size: 1.8rem;
    color: ${C.COLOR_NEGRO};
  }
`;

const WrapperCards = styled(motion.div)`
  margin-top: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  justify-items: center;
  gap: 20px;
`;

const WrapperCardsWorks = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const WrapperCard = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${C.COLOR_CAFE};
  padding: 10px;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: ${(props) =>
      props.primary ? C.COLOR_NARANJA : C.COLOR_AZUL};
  }
  h2 {
    color: ${C.COLOR_BLANCO};
  }
  p {
    color: ${C.COLOR_BLANCO};
    margin-bottom: 20px;
  }

  &:hover .hover_modal {
    bottom: 0;
  }

  .hover_modal {
    position: absolute;
    left: 0;
    bottom: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      hsla(207, 24%, 40%, 0.3) 0%,
      hsla(207, 24%, 4%, 1) 95%
    );
    display: flex;
    align-items: flex-end;
    padding: 1.5rem 1.25rem;
    transition: 0.3s ease-in-out;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: ${C.COLOR_BLANCO};
      cursor: pointer;
      i {
        color: ${C.COLOR_NARANJA};
        font-size: 1.5rem;
      }
    }
  }
`;

export default Proyectos;
