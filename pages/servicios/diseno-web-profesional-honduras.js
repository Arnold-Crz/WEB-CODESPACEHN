import Image from 'next/image';

import styled from 'styled-components';
import * as C from '../../styles/variables';
import Layout from '../../components/Layout';
import Suscribe from '../../components/Suscribe';

function disenoweb() {
  return (
    <Layout>
      <SecctionDesing>
        <div className="content">
          <div className="content_left">
            <h2>
              Diseño <span>Web</span>
            </h2>
            <p>
              Diseñamos tu Pagina Web con las herramientas adecuadas para
              brindarte un diseño que se adapte completamente tu negocio. Asi
              mismo brindandote una web elegante y moderna
            </p>
          </div>
          <div className="content_right">
            <Image
              src={'/img/servicesimg-1.svg'}
              alt="servicios-de-diseño-web-profesional"
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

export default disenoweb;
