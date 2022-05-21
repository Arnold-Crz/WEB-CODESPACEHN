import Image from 'next/image';
import { useState } from 'react';

import styled from 'styled-components';
import * as C from '../styles/variables';

import icon from '../public/img/iconcodespace.svg';

import MenuHamburguesa from './MenuHamburguesa';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const listOptions = [
    { text: 'Inicio', route: '#inicio' },
    { text: 'Servicios', route: '#servicios' },
    { text: 'Planes', route: '#planes' },
    { text: 'Contacto', route: '#contacto' },
  ];
  return (
    <Header>
      <nav>
        <div className="img_logo">
          <Image src={icon} alt="icon" width={50} height={50} />
        </div>
        <MenuCenter>
          <ul className={click ? 'active' : ''}>
            {listOptions.map(({ route, text }, index) => (
              <a key={index} onClick={handleClick} href={route}>
                {text}
              </a>
            ))}
          </ul>
        </MenuCenter>
        <MenuSocial>
          <a href="https://api.whatsapp.com/send/?phone=50433038039&text=Hola Buen dia. estoy interes@ en trabajar juntos en un proyecto.">
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/codespacehn/">
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a href="https://www.instagram.com/codespace_hn/">
            <i className="bx bxl-instagram"></i>
          </a>
        </MenuSocial>
        <MenuHamburguesa click={click} handleClick={handleClick} />
      </nav>
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  margin-top: 20px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  nav {
    padding: 20px;
    background-color: ${C.COLOR_BLANCO};
    border-radius: 15px;
    width: 80%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 2px 20px 0px rgba(30, 30, 60, 0.1);

    @media (max-width: 768px) {
      position: fixed;
      margin: 0;
      bottom: 0;
      width: 100%;
      border-radius: 0;
    }

    .img_logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const MenuCenter = styled.div`
  ul {
    display: flex;
    gap: 20px;
    a {
      color: ${C.COLOR_NEGRO};
      font-weight: 600;
      &:hover {
        color: ${C.COLOR_NARANJA};
      }
    }
  }
  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    ul {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      width: 100%;
      border-radius: 15px;
      box-shadow: 0px 0px 20px 0px rgba(30, 30, 60, 0.1);
      background-color: ${C.COLOR_BLANCO};
      bottom: -1000px;
      padding: 15px;
      gap: 10px;
      transition: 0.8s ease-in-out;

      &.active {
        bottom: 50px;
      }
      a {
        font-size: 1.2rem;
      }
    }
  }
`;

const MenuSocial = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    display: none;
  }
  i {
    font-size: 1.8rem;
    color: ${C.COLOR_GRIS};
  }
  i:hover {
    color: ${C.COLOR_NARANJA};
  }
`;

export default Navbar;
