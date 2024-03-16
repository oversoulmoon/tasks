import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { ShoveBox } from "../bad-components/ShoveBox";
const colors: string[] = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "indigo",
    "gray"
];

export function ChangeColor(): JSX.Element {
    const [currColor, setCurColor] = useState<string>(colors[0]);
    return (
        <div>
            <Form.Group>
                <Form.Label>Choose a Color</Form.Label>
                {colors.map((color: string) => (
                    <Form.Check
                        key={color}
                        type="radio"
                        label={color}
                        value={color}
                        checked={currColor === color}
                        onChange={() => setCurColor(color)}
                        style={{ backgroundColor: color }}
                        inline
                    />
                ))}
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: currColor }}
                >
                    {currColor}
                </div>
            </Form.Group>
        </div>
    );
}
