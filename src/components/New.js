import { useState } from "react";
  
 export const New = ({text}) => {

    const [textVal, setText] = useState(text);

    
    const updateTextVal = () => {
        setText("world");
    };


    return (
        <span
            onClick={updateTextVal} 
        >
            {textVal}
        </span>
    );


 }