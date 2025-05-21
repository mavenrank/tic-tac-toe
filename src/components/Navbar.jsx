// components/Navbar.jsx
"use client"; // This is crucial for using hooks like usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import GitHubButton from "./GitHubButton";

export default function Navbar({ className }) {
    const pathname = usePathname(); // Get the current path

    return (
        // The 'className' prop from RootLayout (h-[15vh] w-full) will be applied here.
        <nav className={className}>
            {/* This div now acts as the primary container for the navbar's content.
              - h-full: Makes this div take 100% of the height of its parent (<nav>), which is 15vh.
              - flex: Enables flexbox.
              - items-center: Vertically centers the flex items (the three inner divs).
              - justify-between: Distributes the three inner divs horizontally with space between them.
              - px-4: Adds horizontal padding (padding-left and padding-right).
            */}
            <div className="h-full flex items-center justify-between px-4 pl-30 pr-30">
                {/* Left-aligned item */}
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" />
                </div>
                {/* Center-aligned item */}
                <div>
                    <h2 className="text-4xl font-extralight font-sans">
                        tic-tac-toe
                    </h2>
                </div>
                {/* Right-aligned item */}
                <div>
                    <GitHubButton />
                </div>
            </div>
        </nav>
    );
}
