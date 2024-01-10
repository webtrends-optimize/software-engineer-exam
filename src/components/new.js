import React from "react";


const New = ({text , onclick}) => {
    return <span onClick={() => onclick()}>{text}</span>
};

export default New;