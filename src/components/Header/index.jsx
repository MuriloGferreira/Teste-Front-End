
import HeaderDesktop from './HeaderDesktop/HeaderDesktop';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import './Header.scss';

const Header = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <header className="header">
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </header>
  );
};

export default Header;
