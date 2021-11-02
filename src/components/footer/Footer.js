import { Component } from 'react';
import { FaAlignRight } from "react-icons/fa";
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

				</div>
            </footer>
		)
	}

}