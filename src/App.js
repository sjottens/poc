import React from 'react';
import './App.scss';
import { client } from './client';
import Products from './components/Products'

import Home from "./pages/Home";
import ProductListPage from './pages/ProductListPage';
import Error from "./pages/Error";

import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";

class App extends React.Component {
	state = {
		products: []
	}
	componentDidMount() {
		client.getEntries()
		.then((response) => {
			console.log(response)
			this.setState({
				products: response.items
			})
		})
		.catch(console.error)
	}

	render() {
		console.log(this.state.products)
		return (
			<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/products" component={ProductListPage}/>
				<Route component={Error}/>
			</Switch>
			<div className="wrapper">
				{this.state.products && <Products products={this.state.products} />}
			</div>
			<Footer/>
			</>
		);
	}
}

export default App;
