import React from 'react'
import { Col, Row } from 'reactstrap'

export default function Secret() {
    return (
        <Row className="justify-content-center">
       <Col xs={{size:"auto"}} md={{size:"auto"}} lg={{size:"auto"}} className="mt-5">
                <img className="img-fluid" src="https://en.pimg.jp/047/504/253/1/47504253.jpg" alt="This is a secret" />
            </Col>
        </Row>
    )
}
