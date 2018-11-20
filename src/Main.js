import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import ServicesPage from './Pages/ServicesPage/ServicesPage';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/services" component={ServicesPage}></Route>
    <Route exact path="/contact" component={ContactPage}></Route>
    <Route exact path="/about" component={AboutUsPage}></Route>
  </Switch>
)

export default Main;