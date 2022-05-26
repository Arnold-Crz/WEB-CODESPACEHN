import styled from 'styled-components';
import TitleSection from '../TitleSection';
import * as C from '../../styles/variables';
import Form from '../form/Form';

function Contacto() {
  return (
    <SectionContacto id="contacto">
      <TitleSection title={'C'} subtitle={'ontacto'} />

      <Wrapper>
        <div className="wrapper_content">
          <div>
            <h2>Contactos</h2>
            <div>
              <div>
                <i
                  className="bx bxs-envelope"
                  style={{ color: '#fffcfc', fontSize: '1.5rem' }}
                ></i>
                <a href="mailto:codespacehn@gmail.com?subject=El Asunto&body=Mensaje">
                  codespacehn@gmail.com
                </a>
              </div>
              <div>
                <i
                  className="bx bxs-phone"
                  style={{ color: '#fffcfc', fontSize: '1.5rem' }}
                ></i>
                <a href="tel:3303-8039">+504 3303-8039</a>
              </div>
              <div>
                <i
                  className="bx bxl-facebook-square"
                  style={{ color: '#fffcfc', fontSize: '1.5rem' }}
                ></i>
                <p>@codespacehn</p>
              </div>
              <div>
                <i
                  className="bx bxl-instagram"
                  style={{ color: '#fffcfc', fontSize: '1.5rem' }}
                ></i>
                <p>@codespace_hn</p>
              </div>
              <div>
                <i
                  className="bx bxl-whatsapp"
                  style={{ color: '#fffcfc', fontSize: '1.5rem' }}
                ></i>
                <a href="https://api.whatsapp.com/send/?phone=50433038039&text=👋Hola Buen dia. Estoy interes@ en trabajar juntos, en un proyecto. 🚀">
                  +504 3303-8039
                </a>
              </div>
            </div>
          </div>
        </div>
        <Form />
      </Wrapper>
    </SectionContacto>
  );
}

const SectionContacto = styled.section`
  width: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .wrapper_content {
    position: relative;
    width: 50%;
    height: 450px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: ${C.COLOR_NARANJA};
    > div {
      position: absolute;
      top: 50px;
      left: 15px;
      width: 280px;
      height: 75%;
      background-color: ${C.COLOR_NEGRO};
      @media screen and (min-width: 600px) {
        width: 350px;
      }
      h2 {
        margin-top: 10px;
        text-align: center;
        color: ${C.COLOR_BLANCO};
        font-size: 2rem;
      }
      > div {
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 30px;

        > div {
          width: 100%;
          display: grid;
          grid-template-columns: 20px 1fr;
          column-gap: 10px;

          a,
          p {
            color: ${C.COLOR_BLANCO};
          }
        }
      }
    }
  }
`;

export default Contacto;
