import React, { useState } from "react";

import Carousel from "../../../components/Carousel";
import Layout from "../../../components/Layout";
import SwitchTabs from "../../../components/SwitchTabs";

import useFetch from "../../../hooks/useFetch";
import './styles.scss'
const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <Layout>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </Layout>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;
