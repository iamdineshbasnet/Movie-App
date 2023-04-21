import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaCodepen,
    FaGithub,
} from "react-icons/fa";

import Layout from "../Layout";

import "./styles.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <Layout>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    The data displayed on this app is provided by The Movie
                    Database (TMDb) API. TMDb is a community-built movie and TV
                    database that provides free access to data on movies and TV
                    shows, including cast, crew, ratings, reviews, and more.
                    This app uses the TMDb API to display information about
                    movies and TV shows for educational purposes only. TMDb is
                    not affiliated with this app and does not endorse or sponsor
                    it.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a
                            href="https://github.com/iamdineshbasnet"
                            target="_blank">
                            <FaGithub />
                        </a>
                    </span>
                    <span className="icon">
                        <a
                            href="https://codepen.io/iamdineshbasnet"
                            target="_blank">
                            <FaCodepen />
                        </a>
                    </span>
                    <span className="icon">
                        <a
                            href="https://facebook.com/iamdineshbasnet"
                            target="_blank">
                            <FaFacebookF />
                        </a>
                    </span>
                    <span className="icon">
                        <a
                            href="https://twitter.com/iamdineshbasnet"
                            target="_blank">
                            <FaTwitter />
                        </a>
                    </span>
                </div>
            </Layout>
        </footer>
    );
};

export default Footer;
