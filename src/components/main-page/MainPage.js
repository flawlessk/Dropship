import Footer from "../footer/Footer"
import "./MainPage.css"

const MainPage = () => {
    return (
        <div className="page-wrapper">
            <header className="login-header">
                <div className="header-container">
                    <div className="header-left">
                        <h1>
                            <a href="/">
                                <img src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/group-30.png" alt="headerlogo"/>
                            </a>
                        </h1>
                    </div>
                    <div className="header-right">
                        <div className="right-menu">
                            <ul className="menu-list">
                                <li>
                                    <a href="">ABOUT</a>
                                </li>
                                <li>
                                    <a href="/catalog">CATALOG</a>
                                </li>
                                <li>
                                    <a href="">PRICING</a>
                                </li>
                                <li>
                                    <a href="">SUPPLIERS</a>
                                </li>
                                <li>
                                    <a href="">HELP CENTER</a>
                                </li>
                                <li>
                                    <a href="">BLOG</a>
                                </li>
                                <li>
                                    <a className="sign-up-btn" target="_blank" href="/register">SIGN UP NOW</a>
                                </li>
                                <li>
                                    <a className="log-in-btn" target="_blank" href="/login">LOGIN</a>
                                </li>
                            </ul>
                        </div>
                        <div className="share-links">
                            <a href="https://www.facebook.com/365Dropship" target="_blank" rel="noreferrer">
                                <img className="fb-img" width="12px" src="../../assets/fb.svg" alt="fblogo" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <img className="mainpage-img" width="100%" src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/hero-1.jpg" alt="back" />
            <div className="baner-wrapper">
                <div className="wrapper-content">
                    <img src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/356Logo.svg" alt="365dp" />
                    <h4>WE GOT YOUR SUPPLY CHAIN COVERED</h4>
                    <h4>365 DAYS A YEAR!</h4>
                </div>
                <a className="sign-up-click" href="/register">SIGN UP NOW</a>
            </div>
            <section className="main-page-section">
                <div className="section-heading">
                    <div>
                        <h2>DISCOVER GLOBAL DROPSHIPPING PRODUCTS</h2>
                    </div>
                    <div>
                        <h3>
                            <span>
                                <strong>PARTNER WITH THE MOST EXPERIENCED DROPSHIPPING TEAM IN THE INDUSTRY!</strong>
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="section-text">
                    <div className="text-wrapper">
                        <span className="text-span">
                            <span className="text-spanf">ONE</span>
                            <span className="text-spans">POINT OF CONTACT PROVIDING TOP DROPSHIP PRODUCTS FROM WORLDWIDE SUPPLIERS</span>
                        </span>
                    </div>
                </div>
                <div className="section-products">
                    <div className="unique-suppliers">
                        <div className="stats-left">
                            <div className="left-sicon">
                                <img src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/combined-shape-1.svg" alt="sicon" />
                            </div>
                            <div className="stats-desc">
                                <div>0</div>
                                <div>Unique Suppliers</div>
                            </div>
                        </div>
                    </div>
                    <div className="unique-products">
                        <div className="stats-left">
                                <div className="left-sicon">
                                    <img src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/combined-shape.svg" alt="sicon" />
                                </div>
                                <div className="stats-desc">
                                    <div>0</div>
                                    <div>Products</div>
                                </div>
                            </div>
                    </div>
                    <div className="unique-destination">
                        <div className="stats-left">
                                <div className="left-sicon">
                                    <img src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/combined-shape-2.svg" alt="sicon" />
                                </div>
                                 <div className="stats-desc">
                                    <div>0</div>
                                    <div>Destination</div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mane-page-section--business">
                <div className="row">
                    <div className="row-wrapper">
                        <div className="row__heading">
                            <div className="heading__title">
                                <h2>HOW TO DROPSHIP BUSINESS WORKS?</h2>
                            </div>
                            <div className="heading__text">
                                <p>Browse and select from our catalog. More than thousands of Dropship products available on various niches. 365DROPSHIP product catalog covers an extensive selection from some of the world’s best sellers</p>
                            </div>
                        </div>
                        <div className="row__content">
                            <div className="flex-start">
                                <div className="content-top">
                                    <img src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/1212.png" alt="social" width="280" height="214" />
                                </div>
                                <div className="content-header">
                                    <h3>JOIN US</h3>
                                </div>
                                <div className="content-description">
                                    "Register to 365"
                                    <strong className="description-strong">DROPSHIP</strong>
                                </div>
                            </div>
                            <div className="flex-start">
                                <div className="content-top">
                                    <img src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/a-2-1.png" alt="social" width="280" height="214" />
                                </div>
                                <div className="content-header">
                                    <h3>FILL YOUR STORE INVENTORY</h3>
                                </div>
                                <div className="content-description">
                                Choose, manage and sync products from the catalog directly to your online store
                                </div>
                            </div>
                            <div className="flex-start">
                                <div className="content-top">
                                    <img src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/a-3-1.png" alt="social" width="280" height="214" />
                                </div>
                                <div className="content-header">
                                    <h3>GET ORDERS</h3>
                                </div>
                                <div className="content-description">
                                Choose manual or automatic synchronize between your online store orders and your shopping cart
                                </div>
                            </div>
                            <div className="flex-start">
                                <div className="content-top">
                                    <img src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/a-4-1.png" alt="social" width="280" height="214" />
                                </div>
                                <div className="content-header">
                                    <h3>DIRECT SHIPPING</h3>
                                </div>
                                <div className="content-description">
                                We will automatically ship your orders directly to your customer
                                </div>
                            </div>
                        </div>
                        <div className="sign-up-click">
                            <p><a href="/register">GET STARTED</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="main-page-section">
                <div className="row">
                    <div className="section-heading">
                        <div>
                            <h3>DROPSHIP</h3>
                        </div>
                    </div>
                    <div className="video_wrapper">
                        <iframe title="How 365Dropship Works" width="1140" height="641" src="https://www.youtube.com/embed/ig3CLaRdjk4?feature=oembed" frameBorder="0" allow="accelerometer" allowFullScreen ></iframe>
                    </div>
                </div>
            </section>
            <div className="footer-wrapper">
                <Footer />
            </div>
        </div>
    )
}

export default MainPage;