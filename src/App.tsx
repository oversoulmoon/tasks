import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
            </header>
            <Container>
                <Row>
                    <Col>
                        <img
                            style={{ width: "300px", height: "300px" }}
                            src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
                            alt="Linux Penguin"
                        />
                        <div
                            style={{
                                height: "100px",
                                width: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <p>Trung Nguyen Hello World Test1</p>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <ul style={{ textDecoration: "none" }}>
                            <li>Why</li>
                            <li>Do</li>
                            <li>This</li>
                        </ul>
                        <div
                            style={{
                                height: "100px",
                                width: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
