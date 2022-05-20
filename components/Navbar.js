import { useState } from 'react';

import Image from 'next/image';

import styles from '../styles/Navbar.module.scss';

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
    <header className={styles.wrapper_header}>
      <nav className={styles.wrappernav}>
        <div className={styles.img}>
          <Image src={icon} alt="icon" />
        </div>
        <div className={styles.wrapper_menu}>
          <ul>
            {listOptions.map(({ route, text }, index) => (
              <a key={index} onClick={handleClick} href={route}>
                {text}
              </a>
            ))}
          </ul>
        </div>
        <MenuHamburguesa click={click} handleClick={handleClick} />
      </nav>
    </header>
  );
}

export default Navbar;
