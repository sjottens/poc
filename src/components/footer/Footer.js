import { Component } from 'react';
import { FaAlignRight } from "react-icons/fa";
import {Link} from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {

    state={
		isOpen:false
	}
	handleToggle = () =>{
		this.setState({isOpen:!this.state.isOpen})
	}
	render() {
		return (
			<footer>
                <div className="footer-top" >
                    
                </div>
				<div className="footer-middle">

				</div>
				<div className="footer-bottom">

					<div className="logo"> 

					</div>
					<div className="links">
						<Link to="/">Conditions of use</Link>
						<Link to="/">Privacy Notice</Link>
					</div>

					<div className="copywrite">
						© 2021, Wundertech, a Wunderman commerce concept
					</div>
				</div>
            </footer>
		)
	}

}