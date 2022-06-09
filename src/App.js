import './App.css';
import Header from "./Components/Header"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import About from "./Pages/About"
import FrontHouse from "./Pages/FrontHouse"
import BackHouse from "./Pages/BackHouse"
import Neighborhood from "./Pages/Neighborhood"
import Austin from "./Pages/Austin"
import HillCountry from "./Pages/HillCountry"
import Revervations from "./Pages/Reservations"
import NoMatch from "./Pages/NoMatch"


function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hi!</h1>
      <Container>
        <Router>
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/fronthouse" element={<FrontHouse />} />
            <Route path="/backhouse" element={<BackHouse />} />
            <Route path="/neighborhood" element={<Neighborhood />} />
            <Route path="/austin" element={<Austin />} />
            <Route path="/hillcountry" element={<HillCountry />} />
            <Route path="/reservations" element={<Revervations />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
