import React, { Component } from 'react';
import wundertech from '../images/wundertech.svg';
import '../scss/navbar.scss'
import { FaBars } from "react-icons/fa";
import {Link} from 'react-router-dom';





export default class Navbar extends Component {
	state={
		isOpen:false,
		routes: [
			{
				url: "/",
				title: "Home"
			},
			{
				url: "/products",
				title: "Products"
			},
		]
	}
	handleToggle = () =>{
		this.setState({isOpen:!this.state.isOpen})
	}
	render() {
		let navigation = [];
		for (const [index, value] of this.state.routes.entries()) {
			navigation.push(<li key={index}><Link to={value.url}>{value.title}</Link></li>)
		}
		return (
			<nav >
				<div className="navbar">
					<div className="nav-header">
						<div className="nav-sidebar">
							<button 
								type="button" 
								className="nav-btn" 
								onClick={this.handleToggle}
							>
								<FaBars className="nav-icon"/>
							</button>
						</div>
						<div className="nav-logo">
							<Link to="/">
								<img src={wundertech} alt="Beach resort"/>
							</Link>
						</div>
					</div>
					<div className="nav-center">
						<ul className={this.state.isOpen?"nav-links":"nav-links"}>
							{navigation}
						</ul>
					</div>
				</div>
				<div className={this.state.isOpen?"sidebar sidebar-show":"sidebar"}>
					<div className="controls">
						<button 
							type="button" 
							className="close sidebar-btn" 
							onClick={this.handleToggle}
						>
							close
						</button>
					</div>
					<div>
						<h3>Menu</h3>
						<ul className="sidebar-links">
							{navigation}
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}
