import React, { Component } from 'react'
import styled from 'styled-components'

import tuberlin from '../tuberlin.svg'
import './home.css'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, white, grey);
  color: black;
`

class TUBerlin extends Component {
  render() {
    return (
      <Wrapper>
        <img src={tuberlin} className="App-logo"/>
        <h3></h3>
            Fakultät I <br />
            YOLO
      </Wrapper>
    )
  }
}

export default TUBerlin;
