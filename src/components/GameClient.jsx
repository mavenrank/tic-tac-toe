// src/app/components/GameClient.jsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import Board from "./game/Board"; // Correct relative path
import Status from "./game/Status"; // Correct relative path

// Helper function to calculate the winner
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a]; // Returns 'X' or 'O'
        }
    }
    return null; // No winner yet
}

// Simple random opponent move logic (for the no-algorithm version)
// This could be moved to src/app/components/utils/randomOpponent.js if you prefer
function getRandomMove(currentSquares) {
    const availableSquares = currentSquares
        .map((sq, index) => (sq === null ? index : null))
        .filter((index) => index !== null);

    if (availableSquares.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableSquares.length);
        return availableSquares[randomIndex];
    }
    return null; // No available moves
}

// No longer accepting algorithmName and algorithmExplanation as props
// because page.jsx is handling their display.
// We keep algorithmLogic prop for future scalability with dynamic routes.
const GameClient = ({ algorithmLogic }) => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true); // 'X' is always the human player

    const winner = calculateWinner(squares);
    const isBoardFull = squares.every((sq) => sq !== null);

    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else if (isBoardFull) {
        status = "Draw!";
    } else {
        status = "Next player: " + (isXNext ? "X" : "O");
    }

    // This effect runs whenever 'squares' or 'isXNext' changes.
    // It's responsible for triggering the AI's move when it's 'O's turn.
    useEffect(() => {
        if (!isXNext && !winner && !isBoardFull) {
            // AI's turn
            // Use a timeout to simulate thinking time and ensure state update is processed
            const timer = setTimeout(() => {
                // If algorithmLogic is provided (e.g., for specific algorithm pages), use it.
                // Otherwise, use the default getRandomMove for the base page.
                const algorithmMove = algorithmLogic
                    ? algorithmLogic(squares)
                    : getRandomMove(squares);

                if (algorithmMove !== null) {
                    const aiNextSquares = squares.slice();
                    aiNextSquares[algorithmMove] = "O";
                    setSquares(aiNextSquares);
                    setIsXNext(true); // Switch back to human's turn
                }
            }, 500); // 500ms delay for AI move

            return () => clearTimeout(timer); // Cleanup the timeout if component unmounts or state changes
        }
    }, [squares, isXNext, winner, isBoardFull, algorithmLogic]); // Dependencies for useEffect

    const handleClick = useCallback(
        (i) => {
            if (squares[i] || winner || isBoardFull || !isXNext) {
                // Added !isXNext check to disable clicks during Algorithm turn
                return; // Ignore click if square is filled, game is won, board is full, or not human's turn
            }

            const nextSquares = squares.slice();
            nextSquares[i] = "X";
            setSquares(nextSquares);
            setIsXNext(false); // Pass turn to 'O' (AI)
        },
        [squares, winner, isBoardFull, isXNext]
    ); // Dependencies for useCallback

    const resetGame = useCallback(() => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
    }, []);

    return (
        // Remove all layout divs here. GameClient will only contain the game elements.
        <div className="flex flex-col items-center justify-center h-full ">
            <Status status={status} />
            <Board squares={squares} onClick={handleClick} />
            <button
                className="mt-8 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 cursor-pointer"
                onClick={resetGame}
            >
                Reset Game
            </button>
        </div>
    );
};

export default GameClient;
