import { Col, Row } from "reactstrap"
import useAuth from "../auth/useAuth"

export default function Index() {
    const auth = useAuth()
    return (
       <Row className="justify-content-center">
            <Col xs={{size:"auto"}} md={{size:"auto"}} lg={{size:"auto"}} className="mt-5">
                <h5>Welcome,
                    {
                        auth.user ? <span className="text-muted"> {auth.user.email}</span> 
                        :
                         <span className="text-muted"> stranger</span>
                    }
                </h5>
            </Col>
        </Row>
    )
}
