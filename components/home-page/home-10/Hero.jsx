import HeroSubscribe from './HeroSubscribe';
import Illustration from './Illustration';

const Hero = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-7'>
          <h1 className='hero-heading fw-bold text-white'>
            Más de 30 años brindando confort.
          </h1>
          {/* <p className='text-lg mb-60 pt-50 pe-xl-5 lg-pt-30 lg-mb-40'>
            Tu bienestar <br /> es nuestro
            <span className='position-relative d-inline-block'>
              compromiso.
            </span>
          </p> */}

          <div className='pr-info fw-500 fs-20 tx-dark mt-35'>
            Más de
            <span className='fw-bold text-decoration-underline'>
              50.000.000
            </span>
            BTU´s instalados en domicilios
          </div>
        </div>
      </div>
      {/* End .row */}

      <Illustration />
      {/* /.illustration-holder */}
    </div>
  );
};

export default Hero;
