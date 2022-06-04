import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';
import * as C from '../styles/variables';

function Suscribe() {
  return (
    <Wrapper>
      <Link href="/">
        <a>
          <Image
            src={'/logosuscribe.png'}
            alt="logo-code-space"
            height={80}
            width={80}
          />
        </a>
      </Link>

      <Social>
        <a href="https://api.whatsapp.com/send/?phone=50498145165&text=👋Hola Buen dia. Estoy interes@ en trabajar juntos, en un proyecto. 🚀">
          <i className="bx bxl-whatsapp"></i>
        </a>
        <a href="https://www.facebook.com/codespacehn/">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="https://github.com/Arnold-Crz">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/arnold-cruz-b9aa81204/">
          <i className="bx bxl-linkedin"></i>
        </a>
      </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: ${C.COLOR_NEGRO};
  border-radius: 15px;
`;

const Social = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  i {
    font-size: 2.5rem;
    color: ${C.COLOR_BLANCO};
    transition: 0.3s;
    &:hover {
      color: ${C.COLOR_NARANJA};
    }
  }
`;
export default Suscribe;
