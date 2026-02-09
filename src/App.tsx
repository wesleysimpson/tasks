import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Wesley Simpson - UD CISC275 with React Hooks and TypeScript
                </h1>
                <img src="/logo192.png" alt="React logo" width="120" />

                <ul>
                    <li>Added a header</li>
                    <li>Added an image with alt text</li>
                    <li>Added a list with three items</li>
                </ul>

                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>

                <Container style={{ marginTop: "16px" }}>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "150px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "150px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </header>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
