import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {adaColors, borderPill, widthBp, sizes} from '../lib/styles'
import ReactGA from 'react-ga'

function pillButton (props) {
  const margin = props.inline
    ? `margin-left: 1rem; margin-right: 1rem;`
    : `margin-left: -1rem;
      margin-right: -1rem;
      width: calc(100% + 2rem);
      @media (${widthBp(sizes.tablet)}) {
        width: auto;
        min-width: 16rem;
      }
      @media (${widthBp(sizes.laptop)}) {
        margin-left: -1.4rem;
        margin-right: -1.4rem;
      }`
  const style = `
    ${borderPill()}
    cursor: pointer;
    border-color: ${adaColors.steel};
    color: ${adaColors.black};
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    &:hover {
      border-color: ${adaColors.steel};
      background-color: ${adaColors.steel};
      color: white;
    }
    &:disabled {
      pointer-events: none;
      border-color: ${adaColors.aluminium};
      color: ${adaColors.aluminium};
      &:hover {
        border-color: ${adaColors.aluminium};
        color: ${adaColors.aluminium};
      }
    }
  `
  return style + margin
}

const RouterLink = styled(Link)`
  ${props => pillButton(props)}
`

const AnchorLink = styled.a`
  ${props => pillButton(props)}
`

const Button = styled.button`
  ${props => pillButton(props)}
`

export default class PillButton extends Component {
  handleClick = () => {
    this.props.onClick && this.props.onClick()
    const action = this.props.trackingId
    if (action) this.track(action)
    if (this.props.toBottom) window.scrollTo(0, document.body.scrollHeight)
  }

  track = (action) => ReactGA.event({category: 'User', action})

  render () {
    const props = this.props
    if (props.to) return <RouterLink onClick={this.handleClick} {...props} />
    if (props.href) return <AnchorLink onClick={this.handleClick} {...props} />
    return <Button onClick={this.handleClick} {...props} />
  }
}
