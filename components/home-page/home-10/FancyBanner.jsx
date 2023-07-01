const FancyBanner = () => {
  return (
    <div className='wrapper position-relative mt-150'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-8 col-lg-10 m-auto text-center'>
            <div className='title-style-one' data-aos='fade-up'>
              <h2 className='main-title fw-bold tx-dark m0'>
                ¡No sufras más por el calor!
              </h2>
            </div>{' '}
            {/* /.title-style-one */}
            <p
              className='text-lg tx-dark pt-40 pb-35 lg-pt-30 lg-pb-20 '
              data-aos='fade-up'
              data-aos-delay='100'
            >
              Mantén tu hogar fresco y confortable con nuestros servicios de
              aire acondicionado de alta calidad.
            </p>
            <a
              href='tel:(3) 337-0203'
              className='btn-two fs-18 fw-500'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              Llamanos
            </a>
          </div>
        </div>
      </div>
      <img
        src='/images/shape/shape_20.svg'
        alt='shape'
        className='lazy-img shapes shape-one'
        style={{ top: '5%', left: '10%' }}
      />
      <img
        src='/images/shape/shape_21.svg'
        alt='shape'
        className='lazy-img shapes shape-two'
        style={{ bottom: '-4%', left: '18%' }}
      />
      <img
        src='/images/shape/shape_22.svg'
        alt='shape'
        className='lazy-img shapes shape-three'
        style={{ bottom: '-4%', right: '23%' }}
      />
      <img
        src='/images/shape/shape_23.svg'
        alt='shape'
        className='lazy-img shapes shape-four'
        style={{ top: '-3%', right: '14%' }}
      />
    </div>
  );
};

export default FancyBanner;
