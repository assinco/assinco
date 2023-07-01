import Link from 'next/link';
import Social from './Social';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Enlaces',
      links: [
        { label: 'Inicio', href: '/' },
        { label: 'Servicios', href: '/#servicios' },
        { label: 'Proyectos', href: '/pages-menu/about-us-v1' },
        { label: 'Nosotros', href: '/pages-menu/service-v1' },
      ],
      classes: 'col-lg-2 col-sm-4 ms-auto mb-30',
    },
    {
      title: 'Contacto',
      links: [
        { label: '(3) 337-0203', href: 'tel:3337-0203' },
        { label: '(7) 730-6068', href: 'tel:+59177306068' },
      ],
      classes: 'col-lg-3 col-sm-4 mb-30',
    },
  ];

  return (
    <div className='row'>
      <div className='col-xl-3 col-lg-2 footer-intro mb-40'>
        <div className='logo'>
          <Link href='/'>
            <img src='/images/logo/assinco.png' alt='' width={95} />
          </Link>
        </div>
        <img
          src='/images/shape/shape_24.svg'
          alt='shape'
          className='mt-60 d-none d-lg-block'
        />
      </div>
      {/* End .col-xl-3 */}

      {footerLinks.map((link, index) => (
        <div key={index} className={link.classes}>
          <h5 className='footer-title tx-dark fw-500'>{link.title}</h5>
          <ul className='footer-nav-link style-none'>
            {link.links.map((linkItem, index) => (
              <li key={index}>
                <Link href={linkItem.href}>{linkItem.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* End menu data */}

      <div className='col-xl-3 col-sm-4 mb-30'>
        <h5 className='footer-title tx-dark fw-500'>Dirección</h5>
        <p className='fs-17'>Calle Horacio Rios #24.</p>
        <a href='mailto:januinc@company.com' className='email tran3s fs-17'>
          assinco@cotas.com.bo
        </a>
        <br />
        <br />
        <Social />
      </div>
    </div>
  );
};

export default Footer;
