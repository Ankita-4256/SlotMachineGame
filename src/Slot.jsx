import React from "react";
import Bingo from "./Bingo";
import NextTime from "./NextTime";

const Slot =(props)=>{
    // this is called object destructuring , object can be break into small parts
    let {x,y,z} =props;
    return(
    (((x===y)&&(y===z))?<Bingo x={x} y={y} z={z}/>:<NextTime x={x} y={y} z={z}/>)
    )
}

export default Slot;