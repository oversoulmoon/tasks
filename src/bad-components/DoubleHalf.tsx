import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState";

interface modVal {
    val: number;
    setNum: (newVal: number) => void;
}

function Doubler(props: modVal): JSX.Element {
    return <Button onClick={() => props.setNum(2 * props.val)}>Double</Button>;
}

function Halver(props: modVal): JSX.Element {
    return <Button onClick={() => props.setNum(0.5 * props.val)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler val={dhValue} setNum={setDhValue}></Doubler>
            <Halver val={dhValue} setNum={setDhValue}></Halver>
        </div>
    );
}
