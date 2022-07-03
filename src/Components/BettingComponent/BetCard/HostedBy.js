import React from 'react';
import { RiShieldStarFill } from "react-icons/ri";
import {textConstants} from '../../../Constants/textConstants';

function HostedBy() {
    return (
        <div className="hostContainer">
            <p className="hostName"><RiShieldStarFill className="smallIcons" />{textConstants.HOSTED_BY} Reniz Manzhil</p>
        </div>
    )
}

export default HostedBy
