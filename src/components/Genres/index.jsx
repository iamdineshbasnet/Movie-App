import React from "react";
import { useSelector } from "react-redux";

import "./styles.scss";

const Genres = ({ data }) => {
    const genres= useSelector((state) => state?.home);
    return (
        <div className="genres">
            {/* {data?.map((g) => {
                console.log(g, 'what is g?')
                if (!genres?.genres[g]?.name) return;
                return (
                    <div key={g} className="genre">
                        {genres?.genres[g]?.name}
                    </div>
                );
            })} */}
        </div>
    );
};

export default Genres;
