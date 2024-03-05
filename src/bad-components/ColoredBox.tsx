import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;
interface colorProps {
    currInd: number;
    changeInd: (newInd: number) => void;
}
function ChangeColor(props: colorProps): JSX.Element {
    return (
        <Button
            onClick={() => props.changeInd((1 + props.currInd) % COLORS.length)}
        >
            Next Color
        </Button>
    );
}

function ColorPreview(props: colorProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[props.currInd],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    currInd={colorIndex}
                    changeInd={setColorIndex}
                ></ChangeColor>
                <ColorPreview
                    currInd={colorIndex}
                    changeInd={setColorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
