import React from "react"

function Link(props) {

    return (
        <p id="slide-num">
            <a onClick={props.changeUrlImage1} href="#">1</a>
            <a onClick={props.changeUrlImage2} href="#">2</a>
            <a onClick={props.changeUrlImage3} href="#">3</a>
        </p>
    )
}

export default Link