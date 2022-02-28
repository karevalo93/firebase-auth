import React from 'react'
import { Col, Row } from 'reactstrap'

export default function NotFound() {
    return (
        <Row className="justify-content-center">
            <Col xs={{size:"auto"}} md={{size:"auto"}} lg={{size:"auto"}} className="mt-5">
                <img className="img-fluid" src="https://blog.sinapsis.agency/wp-content/uploads/2021/04/DEFINICIONES.-ERROR-404.png" alt="404 Not founf..." />
            </Col>
        </Row>
    )
}
