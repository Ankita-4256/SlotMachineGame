import React from "react";

const NextTime =(props)=>{
    return(
        <>
            <div className="slot_inner">
                <h1>{props.x} {props.y} {props.z}</h1>
                <h1 style={{textTransform:"capitalize"}}>Better luck next time</h1>
                <hr/>
            </div>
        </>
    )
}
export default NextTime;