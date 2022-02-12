import "./Footer.css";
import black_white_barnacles from "../img/black_white_barnacles.png";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h2 className="footer-title">
                    OREGON GOOSENECK BARNACLES{" "}
                    <span>
                        <img
                            className="footer-img"
                            src={black_white_barnacles}
                            alt="barnacles"
                        />
                    </span>
                </h2>
            </div>
            <div>
                <h2 className="contact">CONTACT INFO</h2>
            </div>
            <div>
                <a className="email" href="#">
                    GOOSENECKBARNACLES@GMAIL.COM
                </a>
            </div>
            <div className="copyright">
                COPYRIGHT @ 2022 GOOSENECK & CO ALL RIGHTS RESERVED
            </div>
        </div>
    );
};

export default Footer;
