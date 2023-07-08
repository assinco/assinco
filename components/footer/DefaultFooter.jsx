import Link from 'next/link';
import Footer2 from './Footer2';
import CopyrightFooter2 from './CopyrightFooter2';

const DefaultFooter = () => {
  return (
    <div className='footer-style-eleven theme-basic-footer position-relative'>
      <div className='bg-wrapper position-relative'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-xl-2 footer-intro mb-40'>
              <div className='logo'>
                <Link href='/'>
                  <img src='/images/logo/assinco.png' alt='logo de assinco' />
                </Link>
              </div>
            </div>
            {/* End .col */}

            <Footer2 />

            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.bg-wrapper */}
      <CopyrightFooter2 />
      {/* /.bottom-footer */}
      <img
        src='/images/shape/shape_173.svg'
        alt='shape'
        className='lazy-img shapes shape-one'
      />
    </div>
  );
};

export default DefaultFooter;
