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
  align-items: left
  justify-content: left
  color: black
`

class Impressum extends Component {
  render() {
    return (
      <Wrapper>
        <img src={about} className="App-logo" alt="logo" />
        <h2>Impressum</h2>

            <WrapperElement>
            TU Berlin Fakultät I 
    Institut für Philosophie, Literatur-, Wissenschafts- und Technikgeschichte
    Fachgebiet Technikgeschichte

    Sekr. H 67
    Straße des 17. Juni 135
    10623 Berlin

    Telefon: +49 (0) 30 314 24068
    E-Mail: t.costea@campus.tu-berlin.de
    Besucheradresse: TU-Hauptgebäude, Raum H 2049

    Redaktionsteam: Theodor Costea, Uwe Fraunholz, Nina Lorkowski

    Impressum der TU Berlin
            </WrapperElement>
      </Wrapper>
    )
  }
}

export default Impressum;
