import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import about from '../about.svg'
import tuberlin from '../tuberlin.svg'

const Footer = styled.footer`
  display: flex;
  flex: 0.1;
  width: 100%;
  color: black;
  font-size: small;
`

const FooterElement = styled(Link)`
  flex: 1
  display: inline-block
  padding: 1rem
  text-decoration: none
  color: black
  z-index: 100

`

export default () => <Footer>
  <FooterElement to='/tuberlin/'>
    <img src={tuberlin}/>
  </FooterElement>
  <FooterElement to='/about/'>
    About Us
  </FooterElement>
  <FooterElement to='/details/'>
    details
  </FooterElement>
</Footer>
