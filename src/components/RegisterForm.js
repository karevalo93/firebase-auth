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

    const validatePassword = () => {
        {password.length < 1 ?setIsValid(true)  : setIsValid(false)}
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerWithEmailAndPassword(email, password)
            history.push("/")
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                setError("Email already in use!")
            }
            if (err.code === 'auth/weak-password') {
                setError("Password is too short (minimum is 6 characters)")
            }
            if (err.code === "auth/invalid-email") {
                setError("Please enter a valid email")
            }
        }
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
        validatePassword()
    }

    return (
        <Row className="justify-content-center mt-5">
            <Col xs={{ size: 10 }} md={{ size: 5 }} lg={{ size: 4 }}>
                <Form inline onSubmit={handleSubmit}>
                    <h3 className="mb-4">Register your account</h3>
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
                            value={password.value}
                            onChange={onChangePassword}
                            placeholder="Password"
                            type="password"
                            invalid={isValid}
                        />
                        <FormFeedback>
                            {"Name is too short (minimum is 2 characters)"}
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup className="d-grid">
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
