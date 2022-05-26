import Image from 'next/image';
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import * as C from '../styles/variables';

import MenuHamburguesa from './MenuHamburguesa';

function Navbar() {
  const observerNav = () => {
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight,
        sectionTop = section.offsetTop - 100;

      let navItem = document.querySelector(`a[href="#${section.id}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItem.classList.add('active');
      } else {
        navItem.classList.remove('active');
      }
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', observerNav);
    return () => {
      window.removeEventListener('scroll', observerNav);
    };
  }, []);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const listOptions = [
    { text: 'Inicio', route: '#inicio' },
    { text: 'Proyectos', route: '#proyectos' },
    { text: 'Planes', route: '#planes' },
    { text: 'Servicios', route: '#servicios' },
    { text: 'Contacto', route: '#contacto' },
  ];
  return (
    <Header>
      <nav>
        <div className="img_logo">
          <Image src="/logocodespace.svg" alt="icon" width={60} height={60} />
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
          <a href="https://api.whatsapp.com/send/?phone=50433038039&text=👋Hola Buen dia. Estoy interes@ en trabajar juntos, en un proyecto. 🚀">
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
    width: 120%;
    display: flex;
    gap: 20px;
    transition: 0.5s ease-in-out;
    a {
      color: ${C.COLOR_NEGRO};
      font-weight: 600;
      &:hover {
        color: ${C.COLOR_NARANJA};
      }
      &.active {
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
