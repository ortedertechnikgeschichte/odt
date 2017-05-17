import {css} from 'styled-components'

export const adaColors = {
  white: '#FFFFFF',
  navy: '#293754',
  darkNavy: '#0F1625',
  blue: '#3F9FFF',
  aluminium: '#C6CCD5',
  zink: '#EBEFF3',
  steel: '#788295',
  teal: '#0BDCCA',
  purple: '#AAA2D6',
  orange: '#FF9173',
  red: '#FF4575',
  yellow: '#FFCA6C'
}

export const sizes = {
  handheld: 400,
  tablet: 550,
  twoCols: 768,
  medium: 1020,
  laptop: 1200,
  desktop: 1400,
  huge: 1680
}

export const constants = {
  colMaxWidth: '66rem'
}

export function widthBp(pxSize, max = false) {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const px = max ? pxSize - 1 : pxSize
  const emSize = px / 16
  const bp = max ? 'max-width' : 'min-width'
  return bp + ': ' + emSize + 'em'
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (${widthBp(sizes[label])}) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export function fontStyle(style) {
  const serif = `
    font-family: 'PT Serif', serif;
    line-height: 1.3;
    letter-spacing: -0.002em;
  `

  const sans = `
    font-family: 'Noto Sans', sans-serif;
    line-height: 1.55;
    letter-spacing: 0em;
  `

  const sans2 = `
    font-family: 'Nunito', sans-serif;
    line-height: 1.3;
    font-weight: 300;
    letter-spacing: -0.001em;
  `

  switch (style) {
    case 'H1':
      return `
        ${serif}
        font-size: 2.2rem;
        @media (${widthBp(sizes.handheld)}) { font-size: 2.8rem; }
        @media (${widthBp(sizes.tablet)}) { font-size: 3.8rem; }
        @media (${widthBp(sizes.twoCols)}) { font-size: 3rem; }
        @media (${widthBp(sizes.medium)}) { font-size: 3.6rem; }
        @media (${widthBp(sizes.laptop)}) { font-size: 4.2rem; }
        @media (${widthBp(sizes.desktop)}) { font-size: 4.8rem; }
        @media (${widthBp(sizes.huge)}) { font-size: 5.2rem; }
      `
    case 'H2':
      return `
        ${sans2}
        font-size: 2.3rem;
        @media (${widthBp(sizes.handheld)}) { font-size: 2.7rem; }
        @media (${widthBp(sizes.tablet)}) { font-size: 3.1rem; }
        @media (${widthBp(sizes.twoCols)}) { font-size: 2.7rem; }
        @media (${widthBp(sizes.medium)}) { font-size: 2.9rem; }
        @media (${widthBp(sizes.laptop)}) { font-size: 3.3rem; }
        @media (${widthBp(sizes.desktop)}) { font-size: 4.1rem; }
        @media (${widthBp(sizes.huge)}) { font-size: 4.5rem; }
      `
    case 'H3':
      return `
        ${serif}
        font-size: 2rem;
        @media (${widthBp(sizes.handheld)}) { font-size: 2.2rem; }
        @media (${widthBp(sizes.tablet)}) { font-size: 3rem; }
        @media (${widthBp(sizes.twoCols)}) { font-size: 2.2rem; }
        @media (${widthBp(sizes.medium)}) { font-size: 2.8rem; }
        @media (${widthBp(sizes.laptop)}) { font-size: 3rem; }
        @media (${widthBp(sizes.desktop)}) { font-size: 3.6rem; }
        @media (${widthBp(sizes.huge)}) { font-size: 4.2rem; }
      `
    case 'H4':
      return `
        ${sans}
        font-weight: 600;
        font-size: 1.6rem;
        @media (${widthBp(sizes.laptop)}) { font-size: 1.7rem; }
        @media (${widthBp(sizes.desktop)}) { font-size: 1.8rem; }
        @media (${widthBp(sizes.huge)}) { font-size: 2rem; }
      `
    case 'Small':
      return `
        ${sans}
        font-size: 1.35rem;
        @media (${widthBp(sizes.desktop)}) { font-size: 1.45rem; }
        @media (${widthBp(sizes.huge)}) { font-size: 1.55rem; }
      `
    case 'List':
      return `
        ${serif}
        font-size: 1.9rem;
        line-height: 1.4;
        @media (${widthBp(sizes.laptop)}) { font-size: 1.95rem; }
        @media (${widthBp(sizes.desktop)}) { font-size: 1.9rem; }
        @media (${widthBp(sizes.huge)}) { font-size: 2.15rem; }
      `
    case 'Default':
    default:
      return `
        ${sans}
        font-size: 1.6rem;
        @media (${widthBp(sizes.laptop)}) { font-size: 1.7rem; }
        @media (${widthBp(sizes.desktop)}) { font-size: 1.8rem; }
        @media (${widthBp(sizes.huge)}) { font-size: 2rem; }
      `
  }
}

export function pagePaddingTop() {
  return `
    padding-top: 5rem;
    @media (${widthBp(sizes.twoCols)}) { padding-top: 9rem; }
    @media (${widthBp(sizes.desktop)}) { padding-top: 12rem; }
  `
}

export function pagePaddingBot() {
  return `
    padding-bottom: 5rem;
    @media (${widthBp(sizes.twoCols)}) { padding-bottom: 6rem; }
    @media (${widthBp(sizes.desktop)}) { padding-bottom: 8rem; }
  `
}

export function lineInput({error} = {}) {
  return `
    display: block;
    width: 100%;
    padding: 1.2rem 0;
    border: 0;
    outline: 0;
    ${fontStyle()}
    border-bottom: 1px solid ${error ? adaColors.red : adaColors.navy};
    margin: 2.4rem 0;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    resize: none;
    white-space: pre-wrap;
    user-select: auto;
  `
}

export function borderPill() {
  return `
    ${fontStyle()}
    border-width: 1px;
    border-color: transparent;
    background-color: transparent;
    border-style: solid;
    color: inherit;
    display: inline-block;
    outline: 0;
    text-decoration: none;
    border-radius: 2.2rem;
    padding: 1rem 1.8rem;
    width: auto;
    @media (${widthBp(sizes.laptop)}) {
      border-radius: 3rem;
      padding: 1.2rem 2.4rem;
    }
  `
}

export function list(color) {
  return `
    ${fontStyle('List')};
    padding: 0;
    list-style: none;
    max-width: 40rem;
    margin: 2.6rem 0;
    li {
      position: relative;
      margin: 0.75em 0;
      padding: 0 0 0 2.2rem;
      &:before {
        content: '';
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0.65em;
        width: 1rem;
        height: 1rem;
        transform: translateY(-50%);
        border-radius: 50%;
        border: 1px solid ${color || adaColors.orange};
      }
    }
  `
}

export function normalizeFirstEl() {
  return `
    & > h1, & > h2, & > h3, & > h4, & > h5, & > h6, & > p, & > blockqoute, & > ul, & > ol {
      &:first-child {
        margin-top: 1rem;
      }
    }
  `
}
