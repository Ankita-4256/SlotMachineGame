import React from "react";

const Bingo =(props)=>{
    return(
        <>
            <div className="slot_inner">
                <h1>{props.x} {props.y} {props.z}</h1>
                <h1>Bingo !!</h1>
                <hr/>
            </div>
        </>
    )
}
export default Bingo;