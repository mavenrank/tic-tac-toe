// src/components/common/HamburgerButton.jsx
"use client";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function HamburgerButton({ isOpen, onClick }) {
    return (
        <button
            onClick={onClick}
            className="p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
    );
}
