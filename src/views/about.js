import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  padding-top: 4em;
  background: white;
  color: black;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`
const WrapperElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
`

const Einleitung = styled.text`
  display: block;
  text-align: left;
  max-width: 590px;
`

class About extends Component {
  render() {
    return (
      <Wrapper>
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

export default About
