import React, {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
  text-align: left;
  background-color: white;
  border: 15px solid white;
  box-shadow: 2px 2px 5px white;
`

export default class InfowWindow extends Component {
  render () {
    const {index, description, preview, icon, ZeitVolkBautyp, Beschreibung, Erreichbarkeit, Literatur, lat, lng} = this.props
    return <Wrapper>
      {preview && <Link to={`/details/${index}`}>
        <Preview src={preview} />
      </Link>}
      <Description>
        <div>{`${description}`} {icon && <Icon src={icon} />}
          <ul>
            <li>{`${ZeitVolkBautyp}`}</li>
            <li>{`${Beschreibung}`}</li>
            <li>{`${Erreichbarkeit}`}</li>
            <li>GPS: {`${lat}, ${lng}`}</li>
            <li>{`${Literatur}`}</li>
          </ul>
        </div>
      </Description>
    </Wrapper>
  }
}
