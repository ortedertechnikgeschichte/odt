import React, {Component} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`

const Preview = styled.img`
  width: 40%;
`

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
  border: 1px solid gold;
  box-shadow: 2px 2px 5px orange;
`

export default class InfowWindow extends Component {
  render () {
    const {description, lat, lng, preview} = this.props
    return <Wrapper>
      {preview && <Preview src={preview} />}
      <Description>
        <span>{`${description} this awesome shit is at lat ${lat} lng ${lng}`}</span>
      </Description>
    </Wrapper>
  }
}
