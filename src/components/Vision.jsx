import React from "react"

const Vision = (props) => {
    return (
    <div>
        <p>{props.visions[15]}</p>
        {
            props.visions.map((vision)=>(
                <div>
                    <p>{vision}</p>
                </div>
            ))
        }

    </div>
    )
}

export default Vision