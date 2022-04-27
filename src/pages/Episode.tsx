import React from "react";
import {useParams} from "react-router-dom";

import "../App.css";


const Episode = ()=>{
    const params = useParams();
    const seriesId = params.series_id;
    const episodeId = params.episode_id;
    return (
        <div className="heading">Episode {episodeId} from Series {seriesId}</div>
    );
};

export default Episode;

