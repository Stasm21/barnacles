import "./Regulations.css";
import jetty from "../img/or_jetty.jpeg";

const Regulations = () => {
    return (
        <div className="reg-container">
            <div className="reg-head-container">
                <h1 className="regulations-heading">OREGON REGULATIONS</h1>
            </div>
            <div className="reg-info">
                <p className="reg-details">
                    Currently, Oregon regulations limit wild harvesting of
                    barnacles of any size to 50 individuals on man-made
                    structures such as rock jetties, but not on natural rock
                    formations. Please make sure to check the regulations on Oregon's
                    Department of Fish and Wildfire website at
                    <a
                        className="reg-site"
                        href="https://myodfw.com/"
                        target="_blank"
                    >
                        <strong> myODFW</strong>
                    </a>
                    . The Oregon Department of Agriculture's (ODA) shellfish
                    biotoxin hotline is toll free and is updated immediately
                    when shellfish biotoxins reach the alert level. The hotline
                    ​is your best source for up-to-date closure information. <br />
                    ​1-800-448-2474​
                </p>
            </div>
            <div>
                <img
                    src={jetty}
                    alt="oregon jetty on coast"
                    className="img-box"
                />
            </div>
        </div>
    );
};

export default Regulations;
