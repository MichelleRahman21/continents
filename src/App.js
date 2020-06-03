import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import Asia from "./pages/asia";
import Europe from "./pages/europe";
import Oceania from "./pages/oceania";
import Americas from "./pages/americas";
import Africa from "./pages/africa";
import Home from "./pages/home";
import SearchBox from "./pages/search-box";


import NavBar from "./components/NavBar";
import RandomContent from "./components/random-content";
import Countries from "./components/countries";

import './App.css';


function App() {
	return (
    <Router>
    <Container>
		<NavBar />
    	  <Route exact path="/" component={Home} />
				<Route exact path="/africa" component={Africa} />
				<Route exact path="/americas" component={Americas} />
				<Route exact path="/asia" component={Asia} />
				<Route exact path="/europe" component={Europe} />
				<Route exact path="/oceania" component={Oceania} />
    <RandomContent />
    <SearchBox />
    <Countries />
		</Container>
    </Router>
	);
}

export default App;
