// src/components/SlidingPane.jsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTimes, FaCheck } from 'react-icons/fa'; // Import FaCheck for the tick icon
export default function SlidingPane({ isOpen, onCloseMenu }) {
    const pathname = usePathname();

    // Helper to render a section
    const renderSection = (title, links) => (
        <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3 text-gray-400">
                {title}
            </h4>
            <ul className="space-y-3">
                {links.map((linkItem) => {

                    const isActive = pathname === linkItem.href;
                    return (
                        <li key={linkItem.href}>
                            <Link
                                href={linkItem.href}
                                className={`flex items-center px-4 py-2 rounded-md text-sm font-extralight transition-colors duration-150
                                    ${
                                        isActive
                                            ? "text-white font-medium" // Active state: Whiter text, distinct darker background, slightly bolder font
                                            : "text-gray-300 hover:text-gray-200" // Default state
                                    }`}
                                onClick={onCloseMenu} // Close menu on link click
                            >
                                {linkItem.label}
                                {isActive && ( // Conditionally render tick icon if active
                                    <FaCheck
                                        className="ml-2 text-white"
                                        size={12}
                                    /> // Adjust size as needed
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );

    const algorithmLinks = [
        // { href: "/player-vs-player", label: "Player vs Player" },
        { href: "/", label: "no algorithm" },
        { href: "/minimax", label: "minimax" },
        { href: "/alpha-beta-pruning", label: "alpha-beta pruning" },
        { href: "/monte-carlo", label: "monte carlo tree search" },
        {
            href: "/genetic-reinforcement-learning",
            label: "genetic algorithm + reinforcement learning",
        },
    ];

    const extraLinks = [
        { href: "/algorithmic-analysis", label: "Algorithmic Analysis" },
        { href: "/llm-integrations", label: "LLM Integrations" },
    ];

    return (
        <div
            // Changed background to a slightly darker black, adjusted top padding
            className={`fixed top-0 left-0 h-full w-64 bg-[#1A1A1A] z-30 transform transition-transform duration-300 ease-in-out
                        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
            <div className="p-4 pt-[15vh]">
                {" "}
                <button
                    onClick={onCloseMenu}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 rounded"
                    aria-label="Close menu"
                >
                    <FaTimes size={20} /> {/* Slightly smaller icon */}
                </button>

                <h3 className="text-2xl font-extralight mb-8 text-gray-200 mt-2">
                    Menu
                </h3>
                {renderSection("Algorithms", algorithmLinks)}
                {renderSection("Extras", extraLinks)}
            </div>
        </div>
    );
}
