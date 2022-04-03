import React, { useState } from "react";
import { counselors } from "@assets/images/counselors";
import "./styles.scss";
import { ICounselors } from "./interface";
const Counselors: React.FC<ICounselors> = (prop) => {
    let _source = prop.source ? prop.source : counselors;
    return (
        <div className="counselors">
            <video autoPlay={true} muted loop>
                <source src={_source} />
            </video>
        </div>
    );
};

export default Counselors;
