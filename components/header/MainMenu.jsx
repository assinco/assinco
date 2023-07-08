import Link from 'next/link';
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from '../../utils/linkActiveChecker';
import { Link as ScrollLink } from 'react-scroll';

import { useRouter } from 'next/router';
import { useState } from 'react';

const MainMenu = () => {
  const [scrollToId, setScrollToId] = useState('/');

  const handleScrollTo = (id) => {
    setScrollToId(id);
  };
  const router = useRouter();
  return (
    <nav className='navbar navbar-expand-lg order-lg-2'>
      <button
        className='navbar-toggler d-block d-lg-none'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav text-white'>
          <li className='d-block d-lg-none'>
            <div className='logo'>
              <Link href='/' className='d-block'>
                <img
                  src='/images/logo/assinco_logo.png'
                  alt='Assinco'
                  width={95}
                  height={30}
                />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className='nav-item dropdown mega-dropdown-md active'>
            <Link className='nav-link' href='/'>
              Inicio
            </Link>
          </li>
          {/* End li (home mega menu) */}

          <li className='nav-item  dropdown'>
            <ScrollLink
              smooth={true}
              duration={500}
              className='nav-link'
              href='/#servicios'
              // role='button'
              // data-bs-toggle='dropdown'
              // data-bs-auto-close='outside'
              // aria-expanded='false'
              // scroll={false}
              to={scrollToId}
              onClick={() => handleScrollTo('servicios')}
            >
              Servicios
            </ScrollLink>
          </li>
          {/* End li (pages) */}

          <li className='nav-item dropdown'>
            <ScrollLink
              smooth={true}
              duration={500}
              className='nav-link'
              href='/#proyectos'
              // role='button'
              // data-bs-toggle='dropdown'
              // data-bs-auto-close='outside'
              // aria-expanded='false'
              to={scrollToId}
              onClick={() => handleScrollTo('proyectos')}
            >
              Proyectos
            </ScrollLink>
          </li>
          {/* End li (portfolio) */}

          <li className='nav-item dropdown'>
            <ScrollLink
              smooth={true}
              duration={500}
              className='nav-link'
              // href='/#nosotros'
              // role='button'
              // data-bs-toggle='dropdown'
              // data-bs-auto-close='outside'
              // aria-expanded='false'
              to={scrollToId}
              onClick={() => handleScrollTo('nosotros')}
            >
              Nosotros
            </ScrollLink>
          </li>

          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className='mobile-content d-block d-lg-none'>
          <div className='d-flex flex-column align-items-center justify-content-center mt-70'>
            <Link href='/contacto' className='btn-twentyOne fw-500 tran3s'>
              Contacto
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
