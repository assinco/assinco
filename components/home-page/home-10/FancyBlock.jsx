const FancyBlock = () => {
  const images = [
    {
      src: '/images/media/nosotros_assinco.png',
      alt: 'media',
      className: 'lazy-img rounded-3',
    },
    {
      src: '/images/shape/shape_15.svg',
      alt: 'media',
      className: 'lazy-img shapes shape-one',
    },
    {
      src: '/images/shape/shape_16.svg',
      alt: 'media',
      className: 'lazy-img shapes shape-two',
    },
    {
      src: '/images/shape/shape_17.svg',
      alt: 'media',
      className: 'lazy-img shapes shape-three',
    },
    {
      src: '/images/shape/shape_18.svg',
      alt: 'media',
      className: 'lazy-img shapes shape-four',
    },
    {
      src: '/images/shape/shape_19.svg',
      alt: 'media',
      className: 'lazy-img shapes shape-five',
    },
  ];

  const data = {
    title: (
      <>
        <span>Nosotros</span>
      </>
    ),
    subtitle:
      'La empresa Assinco Ingeniería S.R.L. nace el 08 de Abril de 1990, con el aporte y determinación de su propietario el Ing. Rocky Aspiazu  en el rubro del servicio e instalaciones de aire acondicionado. Se inicia  trabajando con equipos de Aire Acondicionado que se adquirían en el mercado local, en los modelos domiciliarios, comerciales e industriales. Con el transcurso del tiempo, del avance y crecimiento de la empresa, logramos la importación de equipos propios en marcas reconocidas a nivel internacional, además ampliamos nuestros servicios hacia el área de Sistemas de extracción.',
  };

  return (
    <div className='row margin-auto' id='nosotros'>
      <div className='col-xl-5 col-lg-6 ms-auto order-lg-last'>
        <div className='block-style-one md-mb-60' data-aos='fade-left'>
          <div className='title-style-one'>
            <h2 className='main-title fw-bold tx-dark m0'>{data.title}</h2>
          </div>
          {/* /.title-style-one */}
          <p className='text-base text-center pt-30 pb-60 lg-pt-30 lg-pb-30 leading-3'>
            {data.subtitle}
          </p>
        </div>

        {/* /.block-style-one */}
      </div>
      {/* End .col-xl-5 */}

      <div
        className='col-xl-6 col-lg-5 col-md-8 col-sm-10 order-lg-first'
        data-aos='fade-right'
      >
        <div className='img-meta-two d-inline-block position-relative pb-50'>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={image.className}
            />
          ))}
          {/* /.card-one */}
        </div>
        {/* /.img-meta-two */}
      </div>
    </div>
  );
};

export default FancyBlock;
