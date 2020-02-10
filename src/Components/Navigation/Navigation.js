import React from 'react';
import navStyle from "./Navigation.module.scss"
import Profile from "../../assets/images/profile.jpg"

const Navigation = props => {
    return (
        <div className={navStyle.navbar}>
            <div className={navStyle.profile}>
                <img src={Profile} alt="Logo" />
                <h2 className={navStyle.name}>Raphael De Los Santos</h2>
            </div>
            <div className={navStyle.nav}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation