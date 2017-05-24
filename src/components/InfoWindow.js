import React, {Component} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`

const Preview = styled.img`
  width: 100px;
  height: 100px;
`
const Icon = styled.img`
  width: 16px;
  height: 16px;
`

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid white;
  box-shadow: 2px 2px 5px white;
`

export default class InfowWindow extends Component {
  render () {
    const {description, preview, icon} = this.props
    return <Wrapper>
      {preview && <Preview src={preview} />}
      <Description>
        <div>{`${description}`} {icon && <Icon src={icon} />} </div>
      </Description>
    </Wrapper>
  }
}
