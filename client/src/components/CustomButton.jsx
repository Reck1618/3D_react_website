import React, {useState} from "react";
import state from '../store'
import { useSnapshot } from "valtio";
import {getContrastingColor} from "../config/helpers";

const CustomButton = ( { type, title, customStyles, handleClick}) => {
    const snap = useSnapshot(state);
    const [isHovered, setIsHovered] = useState(false);
    const generateStyle = (type) => {
        if(type === 'filled') {
            return {
                background: snap.color,
                color:getContrastingColor(snap.color),
                // on hover
                transition: 'background-color 0.3s ease-in-out',
                backgroundColor: isHovered ? '#db6b16' : snap.color,
            }
        } else if(type === 'outline') {
            return {
                borderWidth: '1px',
                borderColor: snap.color,
                color: snap.color,
                transition: 'background-color 0.3s ease-in-out',
                backgroundColor: isHovered ? '#db6b16' : "transparent"
            }
        }
    }

    return (
        <button
            className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
            style={generateStyle(type)}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {title}
        </button>
    )
}

export default CustomButton