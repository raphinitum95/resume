import React, {Component} from "react"
import Typed from "react-typed"

const TypingComponent = props => {
    return (
        <div>
            <Typed
                strings={props.strings}
                typeSpeed={80}
                backSpeed={80}
                loop />
        </div>
    );
}

export default TypingComponent