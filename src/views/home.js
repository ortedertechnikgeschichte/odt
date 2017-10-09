import React, { Component } from 'react'
import styled from 'styled-components'

import templeGPS from '../templeGPS.svg'
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
        <img src={templeGPS} className="App-logo" alt="logo" width="100"/>
        <div className="App-logo" alt="logo">
          <h2>Orte der Technikgeschichte</h2>
          <h3>Ein Projekt des Fachbereichs Technikgeschichte der TU Berlin</h3>
        </div>
      </Wrapper>
    )
  }
}

export default Home;
