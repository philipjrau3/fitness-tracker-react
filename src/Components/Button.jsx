import React from "react";

export const Button = ({ action, content, nameOfClass }) => {
    return (
        <div>
            <button className={nameOfClass} onClick={action}>{content}</button>
        </div>
    )
}

