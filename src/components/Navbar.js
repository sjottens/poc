import React, { Component } from 'react';
import wundertech from '../images/wundertech.svg';
import { FaAlignRight } from "react-icons/fa";
import {Link} from 'react-router-dom';





export default class Navbar extends Component {
	state={
		isOpen:false
	}
	handleToggle = () =>{
		this.setState({isOpen:!this.state.isOpen})
	}
	render() {
		return (
			<nav className="navbar">
				<div className="nav-logo">
					<Link to="/">
						<img src={wundertech} alt="Beach resort"/>
					</Link>
				</div>
				<div className="nav-center">
					<div className="nav-header">
						
						<button 
							type="button" 
							className="nav-btn" 
							onClick={this.handleToggle}
						>
							<FaAlignRight className="nav-icon"/>
						</button>
					</div>
					<ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/rooms">Rooms</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}
