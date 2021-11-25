import React from 'react'

const Header = () => {
    return(
        <header className="header">
            <h3>CORONA <span id="live">LIVE</span></h3>
            <ul id="country">
                <li className="nation">국내</li>
                <li className="nation">미국</li>
                <li className="nation">중국</li>
            </ul>
            

        </header>
    )
}

export default Header