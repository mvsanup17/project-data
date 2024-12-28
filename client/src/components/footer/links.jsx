import React from "react";
import { Link } from "react-router-dom";

function Links(){
    return(
        <div className="mb-3">
            <Link to='/home' className="m-3 text-decoration-none text-black">Home</Link>
            <Link to='/datasets' className="m-3 text-decoration-none text-black">Datasets</Link>
            <Link to='/about' className="m-3 text-decoration-none text-black">About us</Link>
        </div>
    )
}
export default Links