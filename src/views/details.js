import React, { Component } from 'react'
import styled from 'styled-components'
import markers from '../lib/markers.js'


const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  background: radial-gradient(circle, white, grey);
  color: black;
`
const Picture = styled.img`
  Flex: 1;
  display: flex;
  width: 50%;
  height: 50%;
  align-items: right;
`
const Icon = styled.img`
  width: 16px;
  height: 16px;
`
const Description = styled.div`
  align-items: left;
  text-align: left;
  background-color: zink;
  border: 1px solid black;
`

export default class Details extends Component {
  render () {
    const {description, preview, Beschreibung, Erreichbarkeit} = markers[this.props.match.params.id]
    return <Wrapper>
      <Picture src={preview} />
      <Description>
        <div>{description}</div>
        <div>{Beschreibung}</div>
        <div>{Erreichbarkeit}</div>
      </Description>
    </Wrapper>
  }
}
