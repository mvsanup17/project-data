import React from 'react';
import '../footer/footer.css';
import Links from './links.jsx';



function Footer(){
    return(
        <div>
            <footer className="py-5 mt-5 footer-col">
                <div className="container text-center">
                    <p className="display-5 mb-3">myData</p>
                    <Links/>
                    <small>&copy; Copyright by <b>Tech Mavericks</b>. All rights reserved.</small>
                </div>
            </footer>
        </div>
    )
}
export default Footer;