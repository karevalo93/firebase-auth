import React from 'react'
import { Col, Row } from 'reactstrap'

export default function Admin() {
  return (
    <Row className="justify-content-center">
        <Col xs={{size:"auto"}} md={{size:"auto"}} lg={{size:"auto"}} className="mt-5">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ylXZbQjQ0bdpy2JqRKeQy3q2TFzxQuogkBbGMxtu-gt2OXi26Saq_Rj2dx7uDymvrKY&usqp=CAU" alt="You are admin" />
        </Col>
    </Row>
  )
    // return (
  //   <Row className="justify-content-center mt-5">
  //       <Col className="col-auto">
  //           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ylXZbQjQ0bdpy2JqRKeQy3q2TFzxQuogkBbGMxtu-gt2OXi26Saq_Rj2dx7uDymvrKY&usqp=CAU" alt="You are admin" />
  //       </Col>
  //   </Row>
  // )
}
