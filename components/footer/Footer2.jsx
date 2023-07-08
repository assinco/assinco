const columns = [
  {
    title: 'Enlaces',
    links: [
      { label: 'Inicio', url: '/' },
      { label: 'Servicios', url: '/' },
      { label: 'Proyectos', url: '/' },
      { label: 'Nosotros', url: '/' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: '3 337-0203', url: 'tel:3337-0203' },
      { label: '7 730-6068', url: 'tel:+59177306068' },
    ],
  },
  {
    title: 'Dirección',
    links: [
      {
        label: 'Calle Horacio Rios #24',
        url: 'https://maps.google.com/maps?width=600&height=400&hl=en&q=Assinco+Climatizacion',
      },
      { label: 'assinco@cotas.com.bo', url: 'mailto:assinco@cotas.com.bo' },
    ],
  },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className='col-xl-2 col-lg-3 col-sm-4 mb-30' key={index}>
          <h5 className='footer-title tx-dark fw-normal'>{column.title}</h5>
          <ul className='footer-nav-link style-none'>
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
