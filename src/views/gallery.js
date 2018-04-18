import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import Gallery from 'react-grid-gallery'
import Images from '../lib/markers'

const Wrapper = styled.div`
  max-width: 1200px;
  background: white;
  color: black;
  padding: 1.5rem;
  overflow: scroll;
  overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
`
const WrapperElement = styled.div`
  color: black;
  max-width: 100%;
`

class Galerie extends Component {
  constructor(props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

handleOnClick() {
  const { history } = this.props
  history.push(`details/${this.refs.gallery.state.currentImage}`)
}

  render() {
    return (
      <Wrapper>
          <WrapperElement>
            <h3>Galerie</h3>
            <Gallery images={Images} ref='gallery' onClickImage={this.handleOnClick}/>
          </WrapperElement>
      </Wrapper>
    )
  }
}

export default withRouter(Galerie)
