// src/components/game/Board.jsx
"use client";
import React from "react";
import Square from "./Square";
const Board = ({ squares, onClick }) => {

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => onClick(i)} />;
    };

    const boardLineColor = "#303030";

    return (
        <div
            className="grid grid-cols-3 grid-rows-3
                     w-85 h-85
                     border-2"
            style={{
                borderColor: boardLineColor,
            }}
        >
            <div
                className="border-r border-b"
                style={{ borderColor: boardLineColor }}
            >
                {renderSquare(0)}
            </div>
            <div
                className="border-r border-b"
                style={{ borderColor: boardLineColor }}
            >
                {renderSquare(1)}
            </div>
            <div className="border-b" style={{ borderColor: boardLineColor }}>
                {renderSquare(2)}
            </div>

            <div
                className="border-r border-b"
                style={{ borderColor: boardLineColor }}
            >
                {renderSquare(3)}
            </div>
            <div
                className="border-r border-b"
                style={{ borderColor: boardLineColor }}
            >
                {renderSquare(4)}
            </div>
            <div className="border-b" style={{ borderColor: boardLineColor }}>
                {renderSquare(5)}
            </div>

            <div className="border-r" style={{ borderColor: boardLineColor }}>
                {renderSquare(6)}
            </div>
            <div className="border-r" style={{ borderColor: boardLineColor }}>
                {renderSquare(7)}
            </div>
            <div>{renderSquare(8)}</div>
        </div>
    );
};
export default Board;
