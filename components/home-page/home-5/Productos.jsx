import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PropertyBlock from './PropertyBlock';

const ProperyFilter = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabNames = ['PROPERTY', 'CONDOS', 'LAND'];

  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <>
      {/* <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect}> */}
      <div className='row align-items-center'>
        <div className='col-lg-6 col-md-5' data-aos='fade-right'>
          <div className='title-style-eleven text-center text-md-start sm-mb-30'>
            <h2 className='main-title fw-bold tx-dark m0'>Productos</h2>
          </div>
        </div>
        {/* End .col-lg-6 */}
      </div>
      {/* End row list */}

      <div className='tab-content mt-5 lg-mt-10'>
        {/* {tabNames.map((tabName, index) => ( */}
        {/* <TabPanel> */}
        <div className='row' data-aos='fade'>
          <PropertyBlock />
        </div>
        {/* </TabPanel> */}
        {/* ))} */}
      </div>
      {/* </Tabs> */}
    </>
  );
};

export default ProperyFilter;
