import React, { Component } from 'react'
import styled from 'styled-components'
import markers from '../lib/markers.js'
import logo from '../logo.svg'


const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(top, white, grey);
  color: black;
  padding: 1rem;
`
const Heading = styled. div`
  display: block;

  border-bottom: solid black 1px;
  padding: 1rem;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: left;
`
const LogoGPS = styled.img`
  display: block;
  width: 20px;
  height: 20px;
`
const LocationGPS = styled. div`
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

const Picture = styled.img`
  display: block;
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 5px;
  position: relative;
  align-items: right;
`

export default class Details extends Component {
  render () {
    const {description, src, Beschreibung, Erreichbarkeit, lat, lng} = markers[this.props.match.params.id]
    return <Wrapper>
    <div>
      <Heading>
        <div>{description}</div>
      </Heading>
      <LocationGPS>
        <LogoGPS src={logo} />{`${lat}, ${lng}`}
      </LocationGPS>
      <Description>
        <div>{Beschreibung}</div>
        <div>{Erreichbarkeit}</div>
      </Description>
    </div>
    <div>
      <Picture src={src} />
    </div>
    </Wrapper>
  }
}
