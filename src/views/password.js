import React, { Component } from 'react'
import styled from 'styled-components'
import './home.css'


const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(top, white, grey);
  color: black;
`


class Password extends Component {
  hamtEr1Pasword = event => {
    event.preventDefault()
    var input = this.inputRef.value
    if (input !== 'halloibims') return alert('wrong password')
    this.props.history.replace('/home')
    }

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.hamtEr1Pasword}>
          hamst du 1 pasword? <br />
          <input type="password" ref={ref => this.inputRef = ref} name="password"/> <br />
          <input type="submit" value="go"/>
        </form>
      </Wrapper>
    )
  }
}

export default Password
