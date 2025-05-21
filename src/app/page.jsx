"use client";

import React, { useState } from "react";
export default function Home() {
    return (
        <div>
            <div className="flex h-[70vh] pl-30 pr-30">
                <div className="w-[23%] p-4 text-white overflow-auto">
                    <div className="flex justify-center items-center h-full">
                        <h2 className="text-4xl font-extralight font-sans">
                            random
                        </h2>
                    </div>
                </div>
                <div className="w-[35%] p-4 text-white overflow-auto">
                    <div className="">

                    </div>
                    <div className="">

                    </div>
                </div>
                <div className="w-[42%] p-4 text-white overflow-auto">
                    <div className="flex justify-center items-center h-full">
                        <p className="text-lg font-sans font-extralight">
                            A simple tic-tac-toe game with no algorithm.
                            <br />
                            The opponent plays randomly. After you make a move, the opponent
                            will make a move by randomly selecting an empty cell.
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-[15vh]"></div>
        </div>
    );
}
