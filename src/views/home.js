import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import templeGPS from '../templeGPS.svg'
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
const HomeElement = styled(Link)`
text-decoration: none
color: black
`

class Home extends Component {
  render() {
    return (
      <Wrapper>
       <HomeElement to='/map'>
        <img src={templeGPS} className="App-logo" alt="logo" width="100"/>
       </HomeElement>
        <div className="App-logo" alt="logo">
          <h2>Orte der Technikgeschichte</h2>
          <h3>Ein Projekt des Fachbereichs Technikgeschichte der TU Berlin</h3>
        </div>
      </Wrapper>
    )
  }
}

export default Home;
