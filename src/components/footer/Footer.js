import "./Footer.css";


const Footer = () => {
    return (
        <footer id="footer">
                <div className="footer-main">
                        <div className="main-info">
                            <div className="main-info-row">
                                <div className="info-row--box">
                                    <img src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/logo.png" alt="someimage" />
                                    <br />
                                    <br />
                                    <p> 365DropShip is a wholesale drop shipping business that provides products and order fulfillment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="main-info">
                            <h4>DROPSHIP PRODUCTS</h4>
                            <ul>
                                <li><a href="/">Home and Design</a></li>
                                <li><a href="/">Fashion</a></li>
                                <li><a href="/">Jewelry</a></li>
                                <li><a href="/">Beauty</a></li>
                            </ul>
                        </div>
                        <div className="main-info">
                            <h4>ABOUT</h4>
                            <ul>
                                <li><a href="/">Dropship Suppliers</a></li>
                                <li><a href="/">Company</a></li>
                                <li><a href="/">Pricing</a></li>
                                <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="main-info">
                            <h4>SUPPORT</h4>
                            <ul>
                                <li><a href="/">Help Center</a></li>
                                <li><a href="/">Terms of Service</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Chat with us</a></li>
                            </ul>
                        </div>
                </div>
                    <div className="footer-bottom">
                        <div className="footer-center">
                            <span className="footer-copyright">© copyright 365Dropship. All Rights Reserved. </span>
                        </div>
                </div>
        </footer>
    )
}

export default Footer;