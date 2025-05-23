// src/components/game/Square.jsx
"use client";
import React from "react";
const Square = ({ value, onClick }) => {
    return (
        <button
            className="w-28 h-28 flex items-center justify-center text-5xl font-bold
                      text-gray-300
                     hover:bg-gray-700 active:bg-gray-600
                     transition-colors duration-150 ease-in-out"
            onClick={onClick}
        >
            {value}
        </button>
    );
};
export default Square;
