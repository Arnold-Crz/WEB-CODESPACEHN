import styled from 'styled-components';

import { PLANES_DATA } from '../../data/dataPlanes';
import TitleSection from '../TitleSection';
import * as C from '../../styles/variables';

function Planes() {
  return (
    <SectionPlanes id="planes">
      <TitleSection title={'P'} subtitle={'lanes'} />

      <WrapperCards>
        {PLANES_DATA.map(
          ({ id, titulo, subtitulo, boton, link, beneficios }) => (
            <div key={id}>
              <h2 title="Hosting y Dominio tienen un costo adicional">
                {titulo}
              </h2>
              <p>{subtitulo}</p>
              <div>
                <a href={link}>{boton}</a>
              </div>
              <ul>
                {beneficios.map((item, index) => (
                  <li key={index}>
                    <i
                      className="bx bxs-badge-check"
                      style={{ color: '#00b67a', fontSize: '2rem' }}
                    ></i>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </WrapperCards>
    </SectionPlanes>
  );
}

const SectionPlanes = styled.section`
  width: 100%;
  min-height: 100vh;
`;

const WrapperCards = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;

  > div {
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    background-color: ${C.COLOR_BLANCO};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    h2 {
      position: relative;
      text-align: center;
      text-transform: uppercase;
      color: ${C.COLOR_NARANJA};
      font-size: 2.5rem;
      z-index: 1;
      margin-top: 10px;
      margin-bottom: 50px;
      cursor: zoom-in;
      @media screen and (min-width: 600px) {
        font-size: 1.8rem;
      }
    }

    ::after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 100px;
      background-color: ${C.COLOR_NEGRO};
      border-radius: 0 0 100% 100%;
    }
    p {
      padding: 10px;
      text-align: center;
      color: ${C.COLOR_NEGRO};
      font-size: 1.1rem;
      margin-bottom: 20px;
    }

    div:nth-of-type(1) {
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        color: ${C.COLOR_NARANJA};
        width: 150px;
        height: 50px;
        font-size: 1rem;
        background-color: ${C.COLOR_NEGRO};
        margin-bottom: 20px;
        padding: 5px;
        transition: 0.5s;
        &:hover {
          color: ${C.COLOR_BLANCO};
          background-color: ${C.COLOR_NARANJA};
        }
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 35px;
      margin-bottom: 50px;
      li {
        width: 90%;
        display: grid;
        grid-template-columns: 20px 1fr;
        column-gap: 15px;

        p {
          justify-self: flex-start;

          margin: 0;
          padding: 0;
        }
      }
    }
  }
`;

export default Planes;
