import React from "react";
import "./styles.scss";
import Carousel from "../../../components/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <>
            {data?.results?.length > 0 && (
                <Carousel
                    title="Recommendations"
                    data={data?.results}
                    loading={loading}
                    endpoint={mediaType}
                />
            )}
        </>
    );
};

export default Recommendation;