import React from 'react'
import { useSelector } from 'react-redux'
import f_covid from '../../logos_images/f_covid.png'
import f_events from '../../logos_images/f_events.png'
import f_fundraisers from '../../logos_images/f_fundraisers.png'
import f_groupsBlogo from '../../logos_images/f_groupsBlogo.png'
import f_marketplaceBlogo from '../../logos_images/f_marketplaceBlogo.png'
import f_messangerBlogo from '../../logos_images/f_messangerBlogo.png'
import f_pages from '../../logos_images/f_pages.png'
import f_watchBlogo from '../../logos_images/f_watchBlogo.png'




const LeftContainer = () => {
    // const state = useSelector()
    return (
        <div className="leftHud">
            <section id="option">
                <img src={f_covid} alt=""></img>
                <h5>COVID-19 Information Center</h5>
            </section>
            <section id="option">
                <img src={f_events} alt=""></img>
                <h5>Events</h5>
            </section>
            <section id="option">
                <img src={f_fundraisers} alt=""></img>
                <h5>Fundraisers</h5>
            </section>
            <section id="option">
                <img src={f_groupsBlogo} alt=""></img>
                <h5>Groups</h5>
            </section>
            <section id="option">
                <img src={f_marketplaceBlogo} alt=""></img>
                <h5>Marketplace</h5>
            </section>
            <section id="option">
                <img src={f_messangerBlogo} alt=""></img>
                <h5>Messanger</h5>
            </section>
            <section id="option">
                <img src={f_pages} alt=""></img>
                <h5>Pages</h5>
            </section>
        </div>
    )
}

export default LeftContainer;
