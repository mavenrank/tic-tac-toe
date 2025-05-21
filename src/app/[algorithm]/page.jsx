"use client";

import React, { useState } from "react";
export default function Home({ algorithm, explanation }) {
    
    return (
        <div>
            <div className="flex h-[70vh] pl-30 pr-30">
                <div className="w-[23%] p-4 text-white overflow-auto">
                    <div className="flex justify-center items-center h-full">
                        {algorithm}
                    </div>
                </div>
                <div className="w-[35%] p-4 text-white overflow-auto">
                    <div></div>
                </div>
                <div className="w-[42%] p-4 text-white overflow-auto">
                    <div className="">{explanation}</div>
                </div>
            </div>
            <div className="h-[15vh]"></div>
        </div>
    );
}
