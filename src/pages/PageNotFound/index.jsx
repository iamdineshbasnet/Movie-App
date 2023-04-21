import React from "react";

import "./styles.scss";

import Layout from "../../components/Layout";

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <Layout>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </Layout>
        </div>
    );
};

export default PageNotFound;
