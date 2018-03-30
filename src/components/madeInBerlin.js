import React from 'react'
import styled from 'styled-components'

const MadeInBerlin = () => (
  <StyledMadeInBerlin>
    <StyledBerlin src={require('../assets/madeInBerlin.png')} alt="Made in Berlin" className="img-responsive"/>
      <span> Made in Berlin </span>
  </StyledMadeInBerlin>
)

const StyledBerlin = styled.img`
  width: 65px;
`
const StyledMadeInBerlin = styled.div`
  display: inline-block;
  max-width: 90px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 80%;
  margin: 2em;
`
export default MadeInBerlin
