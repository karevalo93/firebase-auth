import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Alert, Button, Col, Form, FormFeedback, FormGroup, Input, Row } from 'reactstrap';
import { registerWithEmailAndPassword } from '../firebase-config';

export default function RegisterForm() {

    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null)
    const [isValid, setIsValid] = useState(null)

    const validate = () => {
        { password < 2 ? setIsValid(false) : setIsValid(true) }
    }

    useEffect(() => {
        validate()
    }, [password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerWithEmailAndPassword(email, password)
            history.push("/")
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                setError("Email already in use")
            }
            if (err.code === 'auth/weak-password') {
                setError("Password should be at least 6 characters")
            }
            if (err.code === "auth/invalid-email") {
                setError("Please enter a valid email")
            }
        }
    }

    return (
        <Row className="justify-content-center mt-5">
            <Col xs={{ size: 10 }} md={{ size: 5 }} lg={{ size: 4 }}>
                <Form inline onSubmit={handleSubmit}>
                    <h3 className="mb-4">Register your account</h3>
                    {error ? <Alert id="alert-warning" color="warning">{error}</Alert> : <span></span>}
                    <FormGroup >
                        <Input
                            id="exampleEmail"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            id="examplePassword"
                            name="password"
                            value={password.value}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            type="password"
                            invalid={!isValid}
                        />
                        <FormFeedback>
                            {"Name is too short (minimum is 2 characters)"}
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup className="d-grid gap-2">
                        <Button color="success">
                            Register
                        </Button>
                    </FormGroup>
                    <span className="text-muted px-0">Already have an account? </span>
                    <Link to="/login" className="pt-0 pl-2">Login</Link>
                </Form>
            </Col>
        </Row >
    )
}
