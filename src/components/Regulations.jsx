import "./Regulations.css";
import jetty from "../img/or_jetty.jpeg";

const Regulations = () => {
    return (
        <div>
            <div className="reg-head-container">
                <h1 className="regulations-heading">Oregon Regulations</h1>
            </div>
            <div className="reg-info">
                <p>
                    Currently Oregon regulations limit wild harvest of the
                    barnacles to 50 individuals of any size on man-made
                    structures like rock jetties but not on natural rock
                    formations. Please make sure to check regulations on Oregons
                    Department of Fish and Wildfire website at
                    <a
                        className="reg-site"
                        href="https://myodfw.com/"
                        target="_blank"
                    >
                        <strong> myODFW</strong>
                    </a>
                </p>
            </div>
            <div>
                <img src={jetty} alt="oregon jetty on coast" className="img-box" />
            </div>
        </div>
    );
};

export default Regulations;
