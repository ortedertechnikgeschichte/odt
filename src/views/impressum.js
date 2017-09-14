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
const Heading = styled. div`
  display: block;
  padding: 1rem;
  max-width: 600px;
  margin: auto;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: left;
`

const Team = styled. div`
  display: block;
  max-width: 600px;
  margin: auto;
  text-align: left;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 75%;
  padding: 1rem;
  border-bottom: solid grey 1px;

`
const Address = styled.div`
  display: block;
  max-width: 600px;
  margin: auto;
  align-items: left;
  text-align: left;
  padding: 1rem;
  font-size: 75%;
  border-bottom: solid grey 1px;
`

class Impressum extends Component {
  render() {
    return (
      <Wrapper>
        <img src={about} className="App-logo" alt="logo" />
        <h2>Impressum</h2>
        <div>
          <Heading>
            TU Berlin Fakultät I
            Institut für Philosophie, Literatur-, Wissenschafts- und Technikgeschichte
            Fachgebiet Technikgeschichte
          </Heading>
          <Team>
            Team: Lorenz Burger, Sebastian Gießel, Melanie Göritz, Franzi ..., Franz Hildebrandt
          </Team>
          <Address>
            Sekr. H 67<br/>
            Straße des 17. Juni 135<br/>
            10623 Berlin<br/>
            Telefon: +49 (0) 30 314 24068<br/>
            E-Mail: t.costea@campus.tu-berlin.de<br/>
            Besucheradresse: TU-Hauptgebäude, Raum H 2049<br/>
            Impressum der TU Berlin http://www.philosophie.tu-berlin.de/servicemenue/impressum/
          </Address>
        </div>
      </Wrapper>
    )
  }
}

export default Impressum;
