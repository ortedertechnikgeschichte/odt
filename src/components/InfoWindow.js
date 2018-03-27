import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`

const Preview = styled.img`
  width: 100px;
  height: 100px;
  margin: auto;
`

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  background-color: white;
  padding-left: 15px;
`
const LinkElement = styled(Link)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  &:hover {
    opacity: 0.8;
  }
`

export default class InfowWindow extends Component {
  render () {
    const {index, description, src, lat, lng} = this.props
    return<Wrapper>
      {src && <LinkElement to={`/details/${index}`}>
        <Preview src={src} />
        <Description>
          <div>
              <h3>{`${description}`}</h3>
              GPS: {`${lat}, ${lng}`}
          </div>
        </Description>
      </LinkElement>}
    </Wrapper>
  }
}
