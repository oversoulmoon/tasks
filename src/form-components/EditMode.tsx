import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <Form.Group>
                <Form.Check
                    type="checkbox"
                    checked={isStudent}
                    id="is-student"
                    onChange={() => setIsStudent(!isStudent)}
                    label="student"
                    hidden={!editMode}
                />
                <h1>
                    {userName} is {isStudent ? "" : "not"} a student
                </h1>
                <Form.Check
                    type="switch"
                    checked={editMode}
                    onChange={() => setEditMode(!editMode)}
                />
                <Form.Control
                    type="text"
                    value={userName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setUserName(event.target.value)
                    }
                    hidden={!editMode}
                />
            </Form.Group>
        </div>
    );
}
