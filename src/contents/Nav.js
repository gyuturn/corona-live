import React from 'react'
import { Link,useHistory } from "react-router-dom";



const Nav = () => {
 
    

    return(
        <nav className="nav">
            <ul id="country">
                <Link to="/"><li className="nation">국내</li></Link>
                <li className="nation">미국</li>
                <Link to="/china"><li className="nation">중국</li></Link>
            </ul>
            

        </nav>
    )
}

export default Nav