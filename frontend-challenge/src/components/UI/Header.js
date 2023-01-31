import React from "react";

import './Header.css'

const Header = (props) => {
    return(
        <div className="header">
            <h2>
                {props.title}
            </h2>
            <p>L(N)= L(N-4)+L(N-3), N{'>'}3 </p>
        </div>
    )
}

export default Header;