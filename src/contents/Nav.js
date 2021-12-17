import React from 'react'
import { Link,useHistory } from "react-router-dom";



const Nav = () => {
 
    

    return(
        <nav className="nav">
            <ul id="country">
                <Link to="/"><li className="nation">국내</li></Link>
                <Link to="/japan"><li className="nation">일본</li></Link>
                <Link to="/spain"><li className="nation">스페인</li></Link>
                <Link to="/germany"><li className="nation">독일</li></Link>
                <Link to="/brazil"><li className="nation">브라질</li></Link>
                <Link to="/france"><li className="nation">프랑스</li></Link>
                <Link to="/portugal"><li className="nation">포르투갈</li></Link>
            </ul>
            

        </nav>
    )
}

export default Nav