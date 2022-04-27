import React from "react";
import {Link} from "react-router-dom";
import "../App.css";

const OnGoing = ()=>{

    return (
        <div>
            <h1 className="heading">요청하신 페이지는 없습니다.</h1>
            <ul>
                <li>주소를 착각하셨을 수 있습니다.</li>
                <li>아니면, 아직은 준비를 하고 있는 페이지를 호출하셨을 수 있습니다.</li>
            </ul>
            <Link to="/">홈으로 돌아가기</Link>
        </div>
    );
};

export default OnGoing;