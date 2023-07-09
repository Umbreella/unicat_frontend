import React from 'react';
import {NavLink} from "react-router-dom";
import {COURSES_ROUTE} from "../../utils/consts";

const YouDontHaveCertificates = () => {
    return (
        <div className="w-100 text-center" style={{fontSize: 16}}>
            У вас нет ни одного сертификата
        </div>
    );
};

export default YouDontHaveCertificates;