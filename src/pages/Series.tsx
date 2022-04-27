import React from "react";
import {useParams} from "react-router-dom";

import "../App.css";

const Series = ()=>{
    const params = useParams();
    const seriesId = params.series_id;

    return (
        <div className="heading">Series - {seriesId}</div>
    );
};

export default Series;