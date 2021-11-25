import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<Hero>
				<Banner title="POC Products" subtitle="POC products starting at $299">
					<Link to='/productdetail' className="btn-primary">
						our products
					</Link>
				</Banner>
			</Hero>
		</>
	);
}

export default Home; 