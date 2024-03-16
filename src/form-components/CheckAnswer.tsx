import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [isCorrect, setIsCore] = useState<boolean>(false);

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
        setIsCore(event.target.value === expectedAnswer);
    }
    return (
        <div>
            <Form.Group>
                <Form.Label>Check Answer</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            {isCorrect ? <div>/✔️</div> : <div>/❌</div>}
        </div>
    );
}
