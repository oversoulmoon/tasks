import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dice1, setDice1] = useState<number>(1);
    const [dice2, setDice2] = useState<number>(2);
    const rollDice1 = () => {
        setDice1(d6());
    };
    const rollDice2 = () => {
        setDice2(d6());
    };
    return (
        <div>
            <span data-testid="left-die">
                {dice1}
                <button onClick={rollDice1}>Roll Left</button>
            </span>
            <span data-testid="right-die">
                {dice2}
                <button onClick={rollDice2}>Roll Right</button>
            </span>
            {dice1 === dice2 && dice1 === 1 && "Lose"}
            {dice1 === dice2 && dice1 != 1 && "Win"}
        </div>
    );
}
