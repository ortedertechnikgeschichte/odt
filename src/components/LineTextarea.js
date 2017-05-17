import React from 'react'
import styled from 'styled-components'
import Textarea from 'react-autosize-textarea'

import {lineInput} from '../lib/styles'

const LineTextarea = styled(Textarea)`
  ${lineInput}
`

export default ({error, ...rest}) => <div>
  <LineTextarea
    {...rest}
    maxRows={12}
  />
</div>
