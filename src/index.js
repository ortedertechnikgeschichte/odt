import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Gallerie from './views/gallery'
import Home from './views/home'
import Maps from './views/map'
import Details from './views/details'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import About from './views/about'
import Impressum from './views/impressum'
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
        <Route exact path="/odt" component={Home}/>
        <Route exact path="/map" component={Maps}/>
        <Route exact path="/details/:id" component={Details}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/gallery" component={Gallerie}/>
        <Route exact path="/impressum" component={Impressum}/>
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
