import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [numAttempt, setNumAttempt] = useState<number>(4);
    const startQuiz = () => {
        setInProgress(true);
        setNumAttempt(numAttempt - 1);
    };
    const mulligan = () => {
        setNumAttempt(numAttempt + 1);
    };
    const stopQuiz = () => {
        setInProgress(false);
    };
    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={inProgress || numAttempt === 0}
            >
                Start Quiz
            </Button>
            {numAttempt}
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
        </div>
    );
}
