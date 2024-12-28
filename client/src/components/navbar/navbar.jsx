import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar/navbar.css';

function Navbar(){
    return(
        <div>
            <nav className='navbar navbar-expand-lg bgcol fixed-top'>
                <Link className='navbar-brand fs-3 ms-5 disabled'>myData</Link>
                <button className='navbar-toggler me-3 shadow-none border-0' type='button' data-bs-toggle='collapse' data-bs-target='#btn'>
                    <i className='bx bx-menu-alt-right bx-md'></i>
                </button>
                <div className='collapse navbar-collapse' id='btn'>
                    <ul className='navbar-nav ms-auto li-col'>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-link mx-5 fs-5 text-col'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/datasets' className='nav-link mx-5 fs-5 text-col'>Datasets</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link mx-5 fs-5 text-col'>About us</Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/' className='nav-link mx-5 fs-5 text-col'>Logout</Link>
                        </li> */}
                        {/* <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle mx-5 fs-4 text-col" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               User
                            </Link>
                            <ul class="dropdown-menu">
                                <li><Link to='/profile' className="dropdown-item page-ho">Profile</Link></li>
                                <li><Link to='/' className="dropdown-item page-ho">Logout</Link></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;



