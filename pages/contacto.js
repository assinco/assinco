import Seo from '../components/common/Seo';
import BlockContact from '../components/contact/BlockContact';
import ContactForm from '../components/contact/ContactForm';
import Map from '../components/contact/Map';
import DefaultFooter from '../components/footer/DefaultFooter';
import DefaulHeader from '../components/header/DefaulHeader';

const contact = () => {
  return (
    <>
      <Seo pageTitle='Contacto | Assinco' />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className='fancy-feature-fiftyOne position-relative mt-250 lg-mt-150'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 text-center m-auto wow fadeInUp'>
              <div className='title-style-five mb-65 lg-mb-40'>
                <div className='sc-title-two fst-italic position-relative d-inline-block'>
                  Información de contacto:
                </div>
                <h2 className='main-title fw-500 tx-dark'>Contáctanos</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src='/images/shape/shape_172.svg'
          alt='shape'
          className='lazy-img shapes shape-two'
        />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <div className='contact-section-one mt-60 lg-mt-30'>
        <div className='container'>
          <div className='row'>
            <BlockContact />
          </div>
        </div>
        {/* End .container */}
        {/* End .container */}
        <Map />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default contact;
