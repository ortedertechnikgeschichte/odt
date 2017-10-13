import React, { Component } from 'react'
import styled from 'styled-components'
import './home.css'
import Gallery from 'react-grid-gallery'
import Images from '../lib/galleryImages'

console.log("Images")
console.log("Markers")

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
  color: black;
  max-width: 1000px;
`

export default class Gallerie extends Component {
  render() {
    return (
      <Wrapper>
          <WrapperElement>
            <h3>Gallerie</h3>
            <Gallery images={Images}/>
          </WrapperElement>
      </Wrapper>
    )
  }
}
