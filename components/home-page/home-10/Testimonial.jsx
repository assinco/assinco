import Slider from 'react-slick';
import React, { useRef } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import { useState } from 'react';
import Image from 'next/image';
import items from '../../../data/portfolio';
import Link from 'next/link';

const Testimonial = () => {
  return (
    <>
      <div className='container' id='proyectos'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-7'>
            <div className='title-style-one text-center text-md-start'>
              <h2 className='main-title fw-bold tx-dark m0'>
                Proyectos <span>destacados</span>
              </h2>
            </div>
            {/* /.title-style-one */}
          </div>
          <div className='container'>
            <div className='row align-items-center'></div>
            {/* End .row */}

            <div className='grid-3column pt-50 lg-pt-20 row'>
              <Gallery>
                {items.map((item, index) => (
                  <div
                    className={`isotop-item ${item.category} col-lg-6 col-md-6`}
                    key={index}
                  >
                    <div className='portfolio-block-one mt-40 xs-mt-30'>
                      <div className='img-meta'>
                        <Image
                          width={380}
                          height={380}
                          src={item.image}
                          alt={item.name}
                          className='w-100 rounded'
                        />
                      </div>
                      <div className='title tran3s d-flex flex-column justify-content-center align-items-center'>
                        <span className='pj-name tran3s fw-500'>
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Gallery>
            </div>
          </div>
        </div>
      </div>
      {/* /.container */}
      {/* /.inner-content */}
    </>
  );
};

export default Testimonial;
