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
                    <a
                        href="https://github.com/iamdineshbasnet"
                        target="_blank">
                        <span className="icon">
                            <FaGithub />
                        </span>
                    </a>
                    <a
                        href="https://codepen.io/iamdineshbasnet"
                        target="_blank">
                        <span className="icon">
                            <FaCodepen />
                        </span>
                    </a>
                    <a
                        href="https://facebook.com/iamdineshbasnet"
                        target="_blank">
                        <span className="icon">
                            <FaFacebookF />
                        </span>
                    </a>
                    <a
                        href="https://twitter.com/iamdineshbasnet"
                        target="_blank">
                        <span className="icon">
                            <FaTwitter />
                        </span>
                    </a>
                </div>
            </Layout>
        </footer>
    );
};

export default Footer;
