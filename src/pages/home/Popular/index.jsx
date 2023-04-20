import React, { useState } from "react";

import Carousel from "../../../components/Carousel";
import Layout from "../../../components/Layout";
import SwitchTabs from "../../../components/SwitchTabs";

import useFetch from "../../../hooks/useFetch";
// import './styles.scss'
const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <Layout>
                <span className="carouselTitle">What's Popular</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </Layout>
            <Carousel endpoint={endpoint} data={data?.results} loading={loading} />
        </div>
    );
};

export default Popular;
