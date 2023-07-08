const socialIcons = [
  {
    iconClass: 'fab fa-facebook-f',
    link: 'https://www.facebook.com/assincosrl',
  },
  {
    iconClass: 'fab fa-linkedin-in',
    link: 'https://www.linkedin.com/company/assinco-climatizaci%C3%B3n/about/',
  },
];

const Social = () => {
  return (
    <ul className='d-flex social-icon style-none'>
      {socialIcons.map((icon, index) => (
        <li key={index}>
          <a href={icon.link} target='_blank' rel='noopener noreferrer '>
            <i className={icon.iconClass} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
