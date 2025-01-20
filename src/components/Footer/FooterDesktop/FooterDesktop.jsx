import '../Footer.scss';
import icon_email from "../../../assets/svgs/icon_email.svg"
import icon_sac from "../../../assets/svgs/icon_sac.svg"
import logo_corebiz from "../../../assets/svgs/site-logo-corebiz-branco.svg"

const FooterDesktop = () => {

    return (
        <footer className="footer desktop">
            <div className="container__contact">
                <div className="footer__contact-itens">
                    <img src={icon_email} className="mail-icon" alt="Mail Icon" />
                    <p>ENTRE EM CONTATO</p>
                </div>
                <div className="footer__contact-itens">
                    <img src={icon_sac} className="sac-icon" alt="Sac Icon" />
                    <p>FALE COM O NOSSO <br />CONSULTOR ONLINE</p>
                </div>
            </div>

            <div className="container__location">


                <div className="container_footer_contact">
                    <h1>Localização</h1>
                    <ul>
                        <li>Avenida Andrômeda, 2000. Bloco 6 e 8 - Alphavile SP</li>
                        <li>brasil@corebiz.ag</li>
                        <li>+55 11 3090 1039</li>
                    </ul>
                </div>
                <div className="container_footer_logo">
                    <p>Created by</p><img src={logo_corebiz} className="logo_corebiz" alt="Logo Corebiz" />
                </div>
            </div>
        </footer>
    );
};

export default FooterDesktop;
