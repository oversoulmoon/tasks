import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    return (
        <div>
            <Form.Group>
                <Form.Label>Number of Attempts left: {numAttempts}</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAttempts(parseInt(event.target.value) || 0)
                    }
                />
                <Button
                    onClick={() => setNumAttempts(numAttempts - 1)}
                    disabled={numAttempts <= 0}
                >
                    use
                </Button>
                <Button
                    onClick={() =>
                        setNumAttempts(numAttempts + requestedAttempts)
                    }
                >
                    gain
                </Button>
            </Form.Group>
        </div>
    );
}
