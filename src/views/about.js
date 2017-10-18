import React, { Component } from 'react'
import styled from 'styled-components'
import about from '../about.svg'
import './home.css'

const Wrapper = styled.div`
display: block;
align-items: center;
justify-content: space-evenly;
background: linear-gradient(top, white, grey);
color: black;
padding: 1.5rem;
overflow: scroll;
`
const WrapperElement = styled.div`
  flex-direction: column
  align-items: center
  justify-content: center
  color: black
`

const Einleitung = styled.text`
  display: block;
  text-align: justify;
  max-width: 800px;
`

class About extends Component {
  render() {
    return (
      <Wrapper>
        <img src={about} className="App-logo" alt="logo" />
        <div className="App-logo" alt="logo">
          <h2>About Us</h2>
        </div>
            <h4>Dies ist ein Projekt des Fachbereichs Technikgeschichte der TU Berlin</h4>
            <WrapperElement>
             <Einleitung>
                In der Regel gibt es für Studierende der Technikgeschichte einmal pro Semester die Möglichkeit an einer Exkursion teilzunehmen.
                Die Reiseziele sind vielfältig. Sizilien, Latium, Neapel, Rom und Kroatien wurden schon besucht.
                Abgesehen davon, dass es sich manchmal um eine Chance handelt, den kalten Winter nicht komplett in Berlin verbringen zu müssen,
                können viele interessante Orte und Bauwerke erkundet werden, von denen man sonst nur in den Veranstaltungen des Masters hört.<br /><br />
                Auf dieser Seite habt ihr die Möglichkeit eure Erfahrungen mit euren Kommilitonen (Und zukünftigen TG-Studierenden) zu teilen.
                Dadurch kann das Wissen vergangener Exkursionen weitergereicht werden.<br /><br />
                Solltet ihr neue Fotos oder Geschichten zu bestimmten Orten haben, meldet euch damit beim Lehrstuhl TG.
                Wir fügen diese dann der Galerie hinzu.
              </Einleitung>
            </WrapperElement>
      </Wrapper>
    )
  }
}

export default About;
