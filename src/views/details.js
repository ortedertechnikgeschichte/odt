import React, { Component } from 'react'
import styled from 'styled-components'
import galleryImages from '../lib/galleryImages.js'


const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  display: block;
  align-items: left;
  background-color: zink;
  border: 1px solid black;
  box-shadow: 2px 2px 5px white;
`

export default class Details extends Component {
  render () {
    const {caption, src, description} = galleryImages[0]
    return <Wrapper>
      <Picture src={src} />
      <Description>
        <div>{`${caption}`}</div>
      </Description>
    </Wrapper>
  }
}
