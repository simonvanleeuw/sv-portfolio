import React from 'react';
import HomePage from './pages/HomePage';
import WorkPage from './pages/Workpage';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <main>
        <BrowserRouter>
        <Header/>
          <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/work" component={WorkPage}/>
              <Route path="/about" component={AboutPage}/>
              <Route component={HomePage}/>
            </Switch>
        </BrowserRouter>
    </main>
  );
}

export default App;
