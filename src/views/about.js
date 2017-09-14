import React, { Component } from 'react'
import styled from 'styled-components'
import about from '../about.svg'
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
const WrapperElement = styled.div`
  flex-direction: column
  align-items: center
  justify-content: center
  color: black
`

class About extends Component {
  render() {
    return (
      <Wrapper>
        <img src={about} className="App-logo" alt="logo" />
        <div className="App-logo" alt="logo">
          <h2>About Us</h2>
        </div>
            Dies ist ein Projekt des Fachbereichs Technikgeschichte der TU Berlin
            <WrapperElement>
              lol
            </WrapperElement>
      </Wrapper>
    )
  }
}

export default About;
