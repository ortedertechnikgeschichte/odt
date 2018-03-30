import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  width: 100%;
  color: black;
  font-size: small;
`

const FooterElement = styled(Link)`
  flex: 1;
  display: inline-block;
  padding: 1rem;
  font-weight: bold;
  font-family: 'Helvetica Neue', sans-serif;
  text-decoration: none;
  color: black;
  background-color: white;
  z-index: 100;
`

export default () => <Footer>
  <FooterElement to='/about/'>
    <h4>About Us</h4>
  </FooterElement>
  <FooterElement to='/impressum/'>
    <h4>Impressum</h4>
  </FooterElement>
</Footer>
