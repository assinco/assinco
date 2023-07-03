import Wrapper from '../layout/wrapper';
import Link from 'next/link';
import Seo from '../components/common/Seo';
import Blog from '../components/home-page/home-10/Blog';
import FancyBlock from '../components/home-page/home-10/FancyBlock';
import FancyBlock2 from '../components/home-page/home-10/FancyBlock2';
import Header from '../components/home-page/home-10/Header';
import Hero from '../components/home-page/home-10/Hero';
import OurAim from '../components/home-page/home-10/OurAim';
import Services from '../components/home-page/home-10/Services';
import Testimonial from '../components/home-page/home-10/Testimonial';
import FancyBanner from '../components/home-page/home-10/FancyBanner';
import Footer from '../components/home-page/home-10/Footer';
import { Element } from 'react-scroll';
import ProperyFilter from '../components/home-page/home-5/ProperyFilter';

const MainRoot = () => {
  return (
    <Wrapper>
      <Seo pageTitle='Assinco Climatización' />
      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <Header />
      {/* <!-- /.theme-main-menu --> */}
      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <div className='hero-banner-one p-30'>
        <div className='bg-wrapper' data-aos='fade'>
          <Hero />
          {/* /.container */}
          <img
            src='/images/shape/shape_08.svg'
            alt='illustration'
            className='lazy-img shapes shape-eight'
          />
        </div>
      </div>
      {/* /.hero-banner-one */}
      {/* 
        =============================================
        Feature Section One
        ============================================== 
        */}
      <div className='fancy-feature-one pt-170 lg-pt-140'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6' data-aos='fade-right'>
              <div className='title-style-one text-center text-lg-start'>
                <h2 className='main-title fw-bold tx-dark m0'>
                  Respira <span>tranquilidad</span>
                </h2>
              </div>
              {/* /.title-style-one */}
            </div>
            <div className='col-lg-5 ms-auto' data-aos='fade-left'>
              <p className='text-lg text-center text-lg-start md-pt-30 m0'>
                El clima perfecto está a solo un paso, contáctanos y disfruta
                del confort en tu hogar o negocio.
              </p>
            </div>
          </div>
        </div>
        {/* End .row */}

        {/* <div className='inner-content pt-110 lg-pt-60 md-pt-30'>
          <div className='row gx-xxl-5'>
            <Services />
          </div>
        </div> */}
        {/* /.inner-content */}
      </div>
      {/* /.fancy-feature-one */}
      {/* 
        =============================================
        Feature Section Two
        ============================================== 
        */}
      {/* <div className='fancy-feature-two position-relative pt-225 mt-40 lg-pt-100 sm-pt-60'>
        <div className='container'>
          <OurAim />
        </div>
      </div> */}
      {/* /.fancy-feature-two */}
      {/*
			=====================================================
				Card Style Two
			=====================================================
			*/}
      {/* <div className='wrapper pt-110 lg-pt-80'>
        <div className='container'>
          <div className='row justify-content-between'>
            <FancyBlock2 />
          </div>
        </div>
      </div> */}
      {/* /.wrapper */}
      {/*
			=====================================================
				Blog Section One
			=====================================================
			*/}
      <div className='blog-section-one p-30 mt-130 lg-mt-120' id='servicios'>
        <div className='bg-wrapper pt-50 pb-170 lg-pt-100 lg-pb-100 position-relative'>
          <div className='shapes shape-one' />
          <img
            src='/images/shape/shape_16.svg'
            alt='icon'
            className='lazy-img shapes shape-two'
          />
          <div className='shapes shape-three' />

          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-sm-7'>
                <div className='title-style-one text-center text-sm-start xs-mb-30'>
                  <h2 className='main-title fw-bold tx-dark m0'>Servicios</h2>
                </div>
                {/* /.title-style-one */}
              </div>
            </div>
            {/* End .row */}

            <div className='row pt-50 lg-pt-30'>
              <Blog />
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.blog-section-one */}
      {/* 
      ============================================= Productos
      ============================================== */}
      <div className='fancy-feature-fortySeven zn2 position-relative pt-130 pb-160 lg-pt-100 lg-pb-100'>
        <div className='container'>
          <ProperyFilter />
        </div>
        {/* /.container */}

        <img
          src='/images/shape/shape_163.svg'
          alt='media'
          className='lazy-img shapes shape-one'
        />
      </div>
      {/*
			=====================================================
				Proyectos
			=====================================================
			*/}
      <div
        id='proyectos'
        className='feedback-section-one position-relative p-30 mt-50 lg-mt-50 '
        data-aos='fade-up'
      >
        <div className='bg-wrapper position-relative pt-100 pb-180 lg-pt-100 lg-pb-120'>
          <img
            src='/images/shape/shape_14.svg'
            alt='img'
            className='lazy-img shapes shape-one'
          />
          <div className='shapes shape-two' />
          <div className='shapes shape-three' />
          <Testimonial />
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.feedback-section-one */}
      {/* 
			=============================================
				Nosotros
			============================================== 
			*/}
      <div
        id='nosotros'
        className='fancy-feature-two position-relative pt-100 lg-pt-120'
      >
        <div className='container'>
          <FancyBlock />
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-two */}
      {/* 
			=============================================
				Wrapper
			============================================== 
			*/}
      <FancyBanner />
      {/* /.wrapper */}
      {/*
			=====================================================
				Fancy Short Banner One
			=====================================================
			*/}
      {/* /.fancy-short-banner-one */}
      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className='footer-style-one theme-basic-footer position-relative'>
        <div className='shapes shape-one' />
        <div className='container'>
          <div className='inner-wrapper'>
            <Footer />
            <div className='bottom-footer'>
              <p className='copyright text-center m0'>
                © {new Date().getFullYear()} Assinco Climatización
              </p>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
      </div>
      {/* /.footer-style-one */}
    </Wrapper>
  );
};

export default MainRoot;
