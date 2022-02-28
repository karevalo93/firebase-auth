import React from 'react'
import { Col, Row } from 'reactstrap'

export default function Loading() {
    return (
        <Row className="justify-content-center">
            <Col xs={{ size: 10 }} md={{ size: 5 }} lg={{ size: 3 }} className="mt-5">
                <img src="https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif" alt="Loading..." />
            </Col>
        </Row>
      )
}
