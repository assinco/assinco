import Image from 'next/image';

const properties = [
  {
    imgSrc: '/images/media/sistema_split_de_muro_convencional_e_inverter.webp',
    name: 'Sistema Split de muro convencional e Inverter',
  },
  {
    imgSrc: '/images/media/Sistema_Cassete.webp',
    name: 'Sistema Cassette',
  },
  {
    imgSrc: '/images/media/Sistema_Split_de_techo.webp',
    name: 'Sistema Split de techo',
  },
  {
    imgSrc: '/images/media/Sistemacentral.webp',
    name: 'Sistema Central',
  },
  {
    imgSrc: '/images/media/Sistema_baja_silueta.webp',
    name: 'Sistema Central Baja silueta',
  },
  {
    imgSrc: '/images/media/Sistema_VRF.webp',
    name: 'Sistema VRF',
  },
  {
    imgSrc: '/images/media/modelo_centrifugo.webp',
    name: 'Modelo Centrífugo',
  },
  {
    imgSrc: '/images/media/Campana_extractora.webp',
    name: 'Campana Extractora',
  },
  {
    imgSrc: '/images/media/Modelo_axial.webp',
    name: 'Modelo Axial',
  },
];

const Property = () => {
  return (
    <>
      {properties.map((property, index) => (
        <div key={index} className='col-lg-4 col-sm-6'>
          <div className='card-style-twentyTwo mt-35'>
            <Image
              width={424}
              height={361}
              src={property.imgSrc}
              alt='media'
              className='lazy-img w-100'
            />
            <div className='text-meta'>
              <h6 className='text-center'>{property.name}</h6>
            </div>
            {/* /.text-meta */}
          </div>
          {/* /.card-style-twentyTwo */}
        </div>
      ))}
    </>
  );
};

export default Property;
