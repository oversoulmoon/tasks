import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>(options[0]);
    const [correct, setCorrect] = useState<boolean>(false);
    return (
        <div>
            <Form.Group>
                <Form.Select
                    value={userAnswer}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setUserAnswer(event.target.value);
                        setCorrect(event.target.value === expectedAnswer);
                    }}
                >
                    {options.map((element: string) => (
                        <option key={element} value={element}>
                            {element}
                        </option>
                    ))}
                </Form.Select>
                <div>{correct ? "/✔️" : "/❌"}</div>
            </Form.Group>
        </div>
    );
}
