import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'
import './home.css'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(top, white, grey);
  color: black;
`

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-logo" alt="logo">
          <h3>Orte der Technikgeschichte</h3>
              Ein Projekt des Fachbereichs Technikgeschichte der TU Berlin
        </div>
      </Wrapper>
    )
  }
}

export default Home;
