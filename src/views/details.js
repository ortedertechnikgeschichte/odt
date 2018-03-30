import React, { Component } from 'react'
import styled from 'styled-components'
import markers from '../lib/markers.js'
import logo from '../logo.svg'


const Wrapper = styled.div`
  display: block;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  color: black;
  overflow: scroll;

@media (min-width: 600px) {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  color: black;
  padding: 1rem;
  overflow: scroll;
  overflow-scrolling: touch;
}
`
const Heading = styled.div`
  display: block;
  border-bottom: solid black 1px;
  padding: 1rem;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: auto;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: auto;
  text-align: left;
`
const LogoGPS = styled.img`
  display: block;
  width: 20px;
  height: 20px;
`
const LocationGPS = styled.div`
  display: flex;
  text-align: center;
  border-bottom: solid grey 1px;
  padding: 1rem;
  font-size: 100%;

`
const Description = styled.div`
  max-width: 800px;
  margin: auto;
  align-items: left;
  text-align: left;
  white-space: normal;
  padding: 1rem;
  margin: auto;
  font-size: 100%;
  border-bottom: solid grey 1px;
`
const Quellen = styled.div`
  max-width: 800px;
  margin: auto;
  align-items: left;
  text-align: left;
  white-space: normal;
  padding: 1rem;
  margin: auto;
  font-size: 100%;
`

const Picture = styled.img`
  width: 100%
  height: auto;
  object-fit: contain;
`

export default class Details extends Component {
  render () {
    const {description, src, Beschreibung, Erreichbarkeit, lat, lng, Literatur} = markers[this.props.match.params.id]
    return <Wrapper>
    <div style={{ paddingRight: 50 }}>
      <Heading>
        <div>{description}</div>
      </Heading>
      <LocationGPS>
        <LogoGPS src={logo} />{`${lat}, ${lng}`}
      </LocationGPS>
      <Description>
        <div>{Beschreibung}</div>
        <div><b>Erreichbarkeit:</b> <br />  {Erreichbarkeit}</div>
      </Description>
      <Quellen><b>Literatur:</b> <br /> {Literatur}</Quellen>
    </div>
    <div>
      <Picture style={{ maxWidth: 600 }} src={src} />
    </div>
    </Wrapper>
  }
}
