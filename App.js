import React from 'react';
import './App.css';
import 'react-calendar/dist/Calendar.css';

import Header from './components/header/header';
import Sidenav from './components/nav/sidenav';
import Home from './pages/home/home';
import About from './pages/about/about';
import Details from './pages/details/details';
import Wrapper from './components/wrapper';
import Patient from './pages/patient/patient';
import Payment from './pages/payment/payment';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './pages/signup/signup';
// import Graph from './components/header2/graph';
// import Sorce from './components/header3/sorce';
//  import Profile from './components/profile1/profile';
// import Gender from './components/profile2/gender';
// import Date from './components/calender/date';



function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
          

          <Redirect exact from="/" to="/login" />
          <Route path='/signup'>
           <Signup/>
          </Route>
          <Route path='/login'>
            <About />
          </Route>
          <Route path='/home'>
            <Wrapper>
              <Home />
            </Wrapper>
          </Route>
          <Route path='/details'>
            <Wrapper>
              <Details />
            </Wrapper>
          </Route>
          <Route path='/patient'>
            <Wrapper>
              <Patient />
            </Wrapper>
          </Route>
          

        </Switch>
        <Route path='/payment'>
             <Wrapper>
              <Payment />
            </Wrapper> 
          </Route>
      </Router>
      
    </div>
  )
}



export default App;
