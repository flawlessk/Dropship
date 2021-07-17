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
        </div>
    )
}

export default MainPage;