import React from 'react'
import styled from 'styled-components'

import {lineInput} from '../lib/styles'

const LineInput = styled.input`
  ${lineInput}
`

export default (props) => <div>
  <LineInput {...props} />
</div>
