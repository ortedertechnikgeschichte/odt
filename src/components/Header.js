import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import home from '../home.svg'
import worldMap from '../worldMap.svg'
import gallery from '../gallery.svg'

const Header = styled.header`
display: flex;
align-items: center;
width: 100%;
color: black;
font-size: medium;
`

const HeaderElement = styled(Link)`
flex: 1;
display: inline-block;
padding: 1rem;
text-decoration: none;
color: black;
`
const HeaderElementRight = styled(Link)`
flex: 1;
display: inline-block;
padding: 1rem;
text-decoration: none;
color: black;
`

export default () => <Header>
  <HeaderElement to='/'>
    <img src={home}/>
  </HeaderElement>
  <HeaderElementRight to='/map'>
    <img src={worldMap}/>
  </HeaderElementRight>
  <HeaderElementRight to='/gallery'>
    <img src={gallery}/>
  </HeaderElementRight>
</Header>
