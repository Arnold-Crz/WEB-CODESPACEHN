import styled from 'styled-components';
import TitleSection from '../TitleSection';
import * as C from '../../styles/variables';
import useObserver from '../../hooks/useObserver';

function Servicios() {
  const refObserver = useObserver();
  return (
    <SectionServicios ref={refObserver} id="servicios">
      <TitleSection title={'S'} subtitle={'ervicios'} />

      <WrapperCards>
        <div className="cards">
          <h2>Diseño Web</h2>
          <i
            className="bx bx-layout"
            style={{ color: '#fffcfc', fontSize: '5.5rem' }}
          ></i>
          <p>
            Diseñamos tu pagina web con las herramientas adecuadas para tu
            negocio. brindandote una web elegante y moderna{' '}
          </p>
          <a href="">Leer mas</a>
        </div>
        <div className="cards">
          <h2>Desarrollo Web</h2>
          <i
            className="bx bx-code-alt"
            style={{ color: '#fffcfc', fontSize: '5.5rem' }}
          ></i>
          <p>
            Desarrollamos páginas web profesionales, rápidas y modernas que
            cumplen los estándares de calidad y requisitos de Google{' '}
          </p>
          <a href="">Leer mas</a>
        </div>
        <div className="cards">
          <h2>Soporte Web</h2>
          <i
            className="bx bx-devices"
            style={{ color: '#fffcfc', fontSize: '5.5rem' }}
          ></i>
          <p>
            Brindamos soporte y Administracion para aquellas paginas web que
            nesecitas darle un cambio de diseño, funcionalidad y mantenimiento
          </p>
          <a href="">Leer mas</a>
        </div>
      </WrapperCards>
    </SectionServicios>
  );
}

const SectionServicios = styled.section`
  min-height: 100vh;
`;

const WrapperCards = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 50px;
  @media (max-width: 425px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .cards {
    background-color: ${C.COLOR_NEGRO};
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 0 20px;

    h2 {
      color: ${C.COLOR_NARANJA};
      margin-bottom: 40px;
      position: relative;
      &::after,
      ::before {
        content: '';
        position: absolute;
        background-color: ${C.COLOR_NARANJA};
        width: 60px;
        height: 2px;
      }
      &::after {
        left: 0;
      }
      &::before {
        right: 0;
        top: 33px;
      }
    }

    & p {
      color: ${C.COLOR_BLANCO};
      margin-top: 20px;
    }

    & a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 250px;
      height: 40px;
      background-color: ${C.COLOR_NARANJA};
      border-radius: 10px;
      color: ${C.COLOR_BLANCO};
      margin-top: 10px;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        color: ${C.COLOR_NARANJA};
        background-color: ${C.COLOR_NEGRO};
      }
    }
  }
`;
export default Servicios;
