import {Switch, Route} from 'react-router-dom'
import LanguageLandingPage from './components/LanguageLandingPage'
import AboutUs from './components/AboutUsPage'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={LanguageLandingPage} />
    <Route path="/about" component={AboutUs} />
  </Switch>
)

export default App
