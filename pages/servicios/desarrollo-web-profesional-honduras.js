import Image from 'next/image';

import styled from 'styled-components';
import * as C from '../../styles/variables';
import Layout from '../../components/Layout';
import Suscribe from '../../components/Suscribe';

function desarrolloweb() {
  return (
    <Layout>
      <SecctionDesing>
        <div className="content">
          <div className="content_left">
            <h2>
              Desarrollo <span>Web</span>
            </h2>
            <p>
              Desarrollamos páginas web profesionales, rápidas y modernas que
              cumplen los estándares de calidad y requisitos de Google.
              Construimos todo tipo de paginas web, trabajamos con diseno a y
              desarrollo a medida, segun el requerimiento y las nesecidades que
              tengas, o lo que quieras mostrar al publico en internet de lo que
              ofreces.
            </p>
          </div>
          <div className="content_right">
            <Image
              src={'/img/servicesimg-3.svg'}
              alt="servicios-de-desarrollo-web-profesional-honduras"
              height={700}
              width={800}
              layout="responsive"
            />
          </div>
        </div>
        <Suscribe />
      </SecctionDesing>
    </Layout>
  );
}

const SecctionDesing = styled.section`
  width: 100%;
  min-height: 100vh;
  .content {
    display: grid;
    grid-template-columns: 1fr;
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .content_left {
      h2 {
        font-size: 2.5rem;
        color: ${C.COLOR_NEGRO};
        span {
          font-size: 2.5rem;
          color: ${C.COLOR_NARANJA};
        }
        @media screen and (min-width: 768px) {
          font-size: 3.5rem;
          span {
            font-size: 3.5rem;
          }
        }
      }
    }
  }
`;

export default desarrolloweb;
