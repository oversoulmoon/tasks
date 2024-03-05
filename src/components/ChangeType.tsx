import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    const changeType = () => {
        type === "short_answer_question"
            ? setType("multiple_choice_question")
            : setType("short_answer_question");
    };
    return (
        <div>
            <button onClick={changeType}>Change Type </button>
            {type === "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
        </div>
    );
}
