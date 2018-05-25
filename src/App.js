import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Login from './components/Login'
import TopNav from './components/TopNav'
import UserProfile from './components/UserProfile'
import Signup from './components/Signup'

import { connect } from 'react-redux'


import './App.css'

class App extends Component {

  constructor(props){
    super(props)
  }


  render(){
    return (
          <BrowserRouter>
            <div>
              <TopNav />
              <Switch>
                <Route exact path='/' component={UserProfile}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/profile' component={UserProfile}/>
                <Route exact path='/signup' component={Signup}/>
              </Switch>
            </div>

          </BrowserRouter>
      )
  }

  isAuthenticated = user => {
    console.log(this.props);
    return this.props.user && this.props.user.name
  }
}


function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(App)
