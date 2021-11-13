import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>Mirpur, Dhaka, Bangladesh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>01514464455</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>motovillage@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <h3>Motovillage</h3>
                                    </div>
                                    <div className="footer-text">
                                        <p>
                                            a trusted online based bike and accessories shop. hare you can pursage product without any doubt. we are commited to provide you better service
                                        </p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <Link to="https://www.facebook.com/">
                                            <i className="fab fa-facebook-f facebook-bg"></i>
                                        </Link>
                                        <Link to="https://twitter.com/">
                                            <i className="fab fa-twitter twitter-bg"></i>
                                        </Link>
                                        <Link to="https://github.com/">
                                            <i className="fab fa-google-plus-g google-bg"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="#">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="#">about</Link>
                                        </li>
                                        <li>
                                            <Link to="#">services</Link>
                                        </li>
                                        <li>
                                            <Link to="#">portfolio</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Contact</Link>
                                        </li>
                                        <li>
                                            <Link to="#">About us</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Our Services</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Expert Team</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Contact us</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Latest News</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>
                                            join our newsletter now! you get all of our update
                                        </p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button>
                                                <i className="fab fa-telegram-plane"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>
                                        Copyright &copy; 2021, All Right Reserved
                                        <Link to="https://github.com/">Nurul</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li>
                                            <Link to="#">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Terms</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Privacy</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Policy</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;