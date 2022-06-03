import Image from 'next/image';
import Link from 'next/link';
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
        navItem?.classList?.add('active');
      } else {
        navItem?.classList?.remove('active');
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

  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <Header>
      <nav>
        <div className="img_logo">
          <Image src="/logocodespace.svg" alt="icon" width={60} height={60} />
        </div>
        <MenuCenter>
          <ul className={click ? 'active' : ''}>
            <a className="menu" onClick={handleClick} href="#inicio">
              Inicio
            </a>
            <MenuDropdown>
              <a className="menu" onClick={handleClick} href="#proyectos">
                Proyectos
              </a>
              <i
                onClick={handleDropdown}
                className={`drop_down bx bxs-chevron-down ${
                  dropdown ? 'active' : ''
                }`}
              ></i>
              <ul className={`submenu ${dropdown ? 'active' : ''}`}>
                <Link href="/desarrollo">
                  <a className="submenu_link">Desarrollo</a>
                </Link>

                <Link href="/desings">
                  <a className="submenu_link">Diseño</a>
                </Link>
              </ul>
            </MenuDropdown>

            <a className="menu" onClick={handleClick} href="#planes">
              Planes
            </a>
            <a className="menu" onClick={handleClick} href="#servicios">
              Servicios
            </a>
            <a className="menu" onClick={handleClick} href="#contacto">
              Contacto
            </a>
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

    .menu {
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

const MenuDropdown = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .drop_down {
    font-size: 1.1rem;
    color: ${C.COLOR_CAFE};
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &.active {
      transform: rotate(180deg);
    }
    @media screen and (max-width: 768px) {
      &.active {
        transform: rotate(-90deg);
      }
    }
  }

  .submenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    border-radius: 10px;
    top: -200px;
    left: -25px;
    width: 150px;
    background-color: ${C.COLOR_BLANCO};
    transition: all 0.6s ease-in-out;
    pointer-events: none;
    opacity: 0;
    &.active {
      top: 50px;
      opacity: 1;
      animation-name: fadeIn;
      animation-fill-mode: forwards;
      animation-delay: 6ms;
    }
    @media screen and (max-width: 768px) {
      top: 0;
      left: 300px;
      width: 120px;
      height: 100px;
      &.active {
        top: 0;
        left: 110px;
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .submenu_link {
      padding: 10px;
      color: ${C.COLOR_CAFE};
      font-size: 0.9rem;
      pointer-events: painted;
      :hover {
        color: ${C.COLOR_NARANJA};
      }
    }
  }
`;

export default Navbar;
