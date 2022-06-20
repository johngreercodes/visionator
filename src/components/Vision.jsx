import React from "react"

const Vision = (props) => {
    return (
        <div>
            <h1>Today's Vision:</h1>
            {visions.data.map( (quote) => {
                <div>quote.vision</div>
            })}
        </div> 
    )
}

export default Vision