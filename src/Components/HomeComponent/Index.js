import React from 'react';
import HomeCard from './HomeCard';
import {NavLink} from 'react-router-dom'

function Index() {
    return (
        <div className="homeContainer">
            <div className="homeCards">
                <NavLink to="/betting">
                    <HomeCard />
                </NavLink>
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </div>
        </div>
    )
}

export default Index
