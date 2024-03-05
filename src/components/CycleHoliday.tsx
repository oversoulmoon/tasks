//import { time } from "console";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
export type TimeOfYear = "Spring" | "Summer" | "Fall" | "Winter" | "End";
function advanceByYear(timeIn: TimeOfYear): TimeOfYear {
    if (timeIn === "Spring") return "Summer";
    else if (timeIn === "Summer") return "Fall";
    else if (timeIn === "Fall") return "Winter";
    else if (timeIn === "Winter") return "End";
    else return "Spring";
}
function advanceByAlphabet(timeIn: TimeOfYear): TimeOfYear {
    if (timeIn === "Spring") return "Summer";
    else if (timeIn === "Summer") return "Winter";
    else if (timeIn === "Fall") return "Spring";
    else if (timeIn === "Winter") return "End";
    else return "Fall";
}
export function CycleHoliday(): JSX.Element {
    const [currTime, setCurrTime] = useState<TimeOfYear>("Spring");
    const nextYear = () => {
        setCurrTime(advanceByYear(currTime));
    };
    const nextAlpha = () => {
        setCurrTime(advanceByAlphabet(currTime));
    };
    return (
        <div>
            Holiday: 😀 {currTime}
            <Button onClick={nextYear}>Cycle by Year</Button>
            <Button onClick={nextAlpha}>Cycle by Alphabet</Button>
        </div>
    );
}
