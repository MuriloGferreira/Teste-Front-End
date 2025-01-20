
import FooterDesktop from './FooterDesktop/FooterDesktop';
import FooterMobile from './FooterMobile/FooterMobile';
import './Footer.scss';

const Footer = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="section_footer">
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </section>
  );
};

export default Footer;