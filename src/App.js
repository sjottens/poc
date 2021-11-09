import React from 'react';
import './App.scss';

import Home from "./pages/Home";
import ProductListPage from './pages/ProductListPage';
import Error from "./pages/Error";

import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
		<>
		<Navbar />
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/products" component={ProductListPage}/>
			<Route component={Error}/>
		</Switch>
		<Footer/>
		</>
	);
}

export default App;
