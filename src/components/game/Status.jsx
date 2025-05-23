// src/components/game/Status.jsx
// No "use client" needed if purely display
import React from "react";
const Status = ({ status }) => {
    return (
        <div className="text-gray-200 text-xl font-light mb-4">
            {status}
        </div>
    );
};
export default Status;
