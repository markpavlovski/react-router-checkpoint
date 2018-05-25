import React from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogout } from '../actions/auth.actions'



class TopNav extends React.Component {

  constructor(props){
    super(props)
  }

  state = {
    isOpen: false
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout = (event) => {
    this.props.userLogout()
    this.toggle()
    this.props.history.push('./login')

  }

  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand><Link to='/' style={{color:'white'}}>ProfileHub</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            { !this.props.user.name
              ? (<Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link to="/login" className="nav-link">Login</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/signup" className="nav-link">Signup</Link>
                  </NavItem>
                </Nav>)
              : (<Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link to="/login" className="nav-link" onClick={this.handleLogout}>Log out</Link>
                  </NavItem>
                </Nav>)
              }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogout: bindActionCreators(userLogout, dispatch)

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
