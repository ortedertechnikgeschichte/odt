import React from 'react'
import styled from 'styled-components'

import PillButton from './PillButton'

const Form = styled.form`
flex: 0.3
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
color: black;
`

const Submit = styled.div`
flex: 0.3;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
color: black;
`

export default ({children, ...rest}) => <Form
  {...rest}
>
  <div>{children}</div>
  <Submit>
    <PillButton
      type='submit'
      trackingId={rest.trackingId}
      large
      disabled={rest.disabled}>
      {rest.submit || 'Submit'}
    </PillButton>
  </Submit>
</Form>
