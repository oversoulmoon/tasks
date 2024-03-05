import { read } from "fs";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [reveal, setReveal] = useState<boolean>(false);
    return (
        <div>
            <button onClick={() => setReveal(!reveal)}>Reveal Answer</button>
            {reveal && "42"}
        </div>
    );
}
