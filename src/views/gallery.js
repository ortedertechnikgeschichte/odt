import React, { Component } from 'react'
import styled from 'styled-components'

import './home.css'
import Gallery from 'react-grid-gallery'
import Images from '../lib/markers'

const Wrapper = styled.div`
  max-width: 1200px;
  background: white;
  color: black;
  padding: 1.5rem;
  overflow: scroll;
`
const WrapperElement = styled.div`
  color: black;
  max-width: 100%;
  overflow: scroll;
`

export default class Gallerie extends Component {
  render() {
    return (
      <Wrapper>
          <WrapperElement>
            <h3>Gallerie</h3>
            <Gallery images={Images} />
          </WrapperElement>
      </Wrapper>
    )
  }
}
