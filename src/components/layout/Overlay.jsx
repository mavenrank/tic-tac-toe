// src/components/common/Overlay.jsx
"use client";
import React from "react";

export default function Overlay({ isOpen, onClick }) {
    if (!isOpen) return null;
    return (
        <div
            className="fixed inset-0 bg-black opacity-50 z-20"
            onClick={onClick}
        ></div>
    );
}
