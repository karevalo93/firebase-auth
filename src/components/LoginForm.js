import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Alert, Button, Form, FormGroup, Input, Row, Col, FormFeedback, Label } from 'reactstrap'
import { logInWithEmailAndPassword, signInWithGoogle } from '../firebase-config';

export default function LoginForm() {

    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null)
    const [alerta, setAlerta] = useState(null)

    const isValidPassword = (str) => {
        return str.length < 2
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const isValid = isValidPassword(password)
            if (!isValid) {
                setAlerta(false)
                await logInWithEmailAndPassword(email, password)
                history.push("/")
            }
            setAlerta(true)
        } catch (err) {
            if (err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
                setError("Invalid email or password!")
            }
        }
    }

    return (
        <Row className="justify-content-center mt-5">
            <Col xs={10} md={{ size: 5 }} lg={{ size: 4 }}>
                <Form inline onSubmit={handleSubmit}>
                    <h3 className="mb-4">Login with your account information</h3>
                    {error ? <Alert id="alert-warning" color="warning">{error}</Alert> : <span></span>}
                    <FormGroup >
                        <Input
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            type="password"
                            invalid={alerta}
                        />
                        <FormFeedback>
                            {"Name is too short (minimum is 2 characters)"}
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup className="d-grid">
                        <Button color="success" type='submit'>
                            Login
                        </Button>
                    </FormGroup>
                    <Row>
                        <FormGroup className="btn-group">
                            <Button color="primary" onClick={signInWithGoogle} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg></Button>
                            <Button color="secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg></Button>
                            <Button color="info"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg></Button>
                        </FormGroup>
                    </Row>
                    <span className="text-muted px-0">Don't have an account yet? </span>
                    <Link to="/register" className="pt-0 pl-2">Register</Link>
                </Form>
            </Col>
        </Row >
    )
}
