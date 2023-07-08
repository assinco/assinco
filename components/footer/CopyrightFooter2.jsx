import Link from 'next/link';

const icons = [
  {
    icon: 'fab fa-facebook-f',
    href: 'https://www.facebook.com/assincosrl',
  },
  {
    icon: 'fab fa-linkedin-in',
    href: 'https://www.linkedin.com/company/assinco-climatizaci%C3%B3n/about/',
  },
];

const LinkItem = ({ title, href }) => {
  return (
    <li>
      <Link href={href}>{title}</Link>
    </li>
  );
};

const IconItem = ({ icon, href }) => {
  return (
    <li>
      <Link href={href} target='_blank' rel='noopener noreferrer'>
        <i className={icon} />
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <div className='bottom-footer lg-pb-20 position-relative'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 order-lg-2 mt-15'>
            <ul className='d-flex justify-content-center justify-content-lg-end social-icon style-none'>
              {icons.map((icon, index) => (
                <IconItem key={index} icon={icon.icon} href={icon.href} />
              ))}
            </ul>
          </div>
          <div className='col-lg-4 order-lg-1 mt-15'>
            <p className='copyright text-center m0'>
              © {new Date().getFullYear()} Assinco Climatización
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
