import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


const UserProfile = (props) => {
  console.log('up props', props)
  if (!props.user.name) props.history.push('/login')
  return (
    <div>
      <Container>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <h1 className="text-center">User Profile Page</h1>
          </Col>
        </Row>
        <Row style={{marginTop: 20}}>
          <Col>
            <img src="http://via.placeholder.com/350x450" alt="profile" />
          </Col>
          <Col>
            <h3>Name: {props.user.name}</h3>
            <h3>Email: {props.user.email}</h3>
            <h3>Company: {props.user.company}</h3>
            <h3>Phone: {props.user.phone}</h3>
            <h3>Address: {props.user.address}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(UserProfile)
