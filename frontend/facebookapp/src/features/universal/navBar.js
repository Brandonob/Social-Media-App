import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

import '../../css/homeCss.css'
import f_logo from '../../logos_images/f_logo.png'
import f_dropdownimgL from '../../logos_images/f_dropdownimgL.png'
import f_gamesimgD from '../../logos_images/f_gamesimgD.png'
import f_gamesimgL from '../../logos_images/f_gamesimgL.png'
import f_groupsimgD from '../../logos_images/f_groupsimgD.png'
import f_groupsimgL from '../../logos_images/f_groupsimgL.png'
import f_homeimgD from '../../logos_images/f_homeimgD.png'
import f_homeimgL from '../../logos_images/f_homeimgL.png'
import f_marketplaceimgD from '../../logos_images/f_marketplaceimgD.png'
import f_marketplaceimgL from '../../logos_images/f_marketplaceimgL.png'
import f_messangerimgL from '../../logos_images/f_messangerimgL.png'
import f_notificationsimg from '../../logos_images/f_notificationsimg.png'
import f_plusimgL from '../../logos_images/f_plusimgL.png'
import f_watchimgD from '../../logos_images/f_watchimgD.png'
import f_watchimgL from '../../logos_images/f_watchimgL.png'




const NavBar = () => {
    const [theme, setTheme] = useState("light")

    const changeTheme = () => {
        if(theme === "light"){
            setTheme("dark")
        } else {
            setTheme("light")
        }

    }
    return (
        <div className="navbar">
            <div className="left">
                <img src={f_logo} alt="" />
                <input type="text" placeholder="Search Facebook"/>
            </div>

            <div className="center">
                <section>
                    <img src={f_homeimgL} alt=""/>
                </section>
                <section>
                    <img src={f_watchimgL} alt=""/>
                </section>
                <section>
                    <img src={f_marketplaceimgL} alt=""/>
                </section>
                <section>
                    <img src={f_groupsimgL} alt=""/>
                </section>
                <section>
                    <img src={f_gamesimgL} alt=""/>
                </section>
                
            </div>

            <div className="right">
                <section>
                    <img src={f_plusimgL} alt=""/>
                </section>
                <section>
                    <img src={f_messangerimgL} alt=""/>
                </section>
                <section>
                    <img src={f_notificationsimg} alt=""/>
                </section>
                <section>
                    <img src={f_dropdownimgL} alt=""/>
                </section>
                {/* <button onClick={changeTheme} >Dark Mode</button> */}
            </div>
        </div>
    )
}

export default NavBar;
