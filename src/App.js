import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import Header from './Components/Header/Header'
import About from "./Components/About/About"
import Services from "./Components/Services/Services"
import Tariff from "./Components/Tariff/Tariff"
import News from "./Components/News/News"
import Faq from "./Components/Faq/Faq"
import Contact from "./Components/Contact/Contact"
import Registration from "./Components/Registration/Registration"
import Login from './Components/Login/Login'
import Shops from './Components/Shops/Shops'
import Last from './Components/Lastnews/Last'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import Section3 from './Components/Section3/Section3'
import Section4 from './Components/Section4/Section4'
import Section5 from './Components/Section5/Section5'
import Section6 from './Components/Section6/Section6'
import Section7 from './Components/Section7/Section7'
import Footer from "./Components/Footer/Footer"
import ScrollToTop from './Components/ScrollToTop'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ScrollToTop />

        <Route exact path="/starex">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/tariff">
          <Tariff />
        </Route>
        <Route path="/shops">
          <Shops />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/new/:id">
          <Last />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
