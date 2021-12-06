import cssClasses from './Footer.module.css';

const Footer = () => {
  return (
    <div className={cssClasses.footer}>
      <div>
        <p className={cssClasses.header}>About</p>
        <ul className={cssClasses.list}>
          <li className={cssClasses.li}>Privacy Notices</li>
          <li className={cssClasses.li}>Trust Center</li>
          <li className={cssClasses.li}>Careers</li>
        </ul>
      </div>
      <div>
        <p className={cssClasses.header}>Social</p>
        <ul className={cssClasses.list}>
          <li className={cssClasses.li}>Facebook</li>
          <li className={cssClasses.li}>Instagram</li>
          <li className={cssClasses.li}>Linkedin</li>
          <li className={cssClasses.li}>Youtube</li>
        </ul>
      </div>
      <div>
        <p className={cssClasses.header}>Contact</p>
        <ul className={cssClasses.list}>
          <li className={cssClasses.li}>Email : </li>
          <li className={cssClasses.li}>supports@paisaat.com</li>
          <li className={cssClasses.li}>paisaat@paisaat.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
