import { useEffect, useState } from 'react';
import MainMenu from './MainMenu';
import Link from 'next/link';
import Image from 'next/image';

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${
        navbar ? 'fixed' : ''
      }`}
    >
      <div className='inner-content position-relative'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='logo order-lg-0'>
            <Link href='/' className='d-block'>
              <Image
                src='/images/logo/assinco.png'
                alt='logo'
                width={95}
                height={30}
              />
            </Link>
          </div>
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;
