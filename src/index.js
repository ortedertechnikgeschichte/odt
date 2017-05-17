import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Gallerie from './views/gallery'
import Home from './views/home'
import Maps from './views/map'
import TUBerlin from './views/tuberlin'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import About from './views/about'
import './index.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const App = () => (
  <Router>
    <Wrapper>
      <Header />
      <Main>
        <Route exact path="/" component={Home}/>
        <Route exact path="/map" component={Maps}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/tuberlin" component={TUBerlin}/>
        <Route exact path="/gallery" component={Gallerie}/>
      </Main>
      <Footer />
    </Wrapper>
  </Router>
)
export default App
//
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
