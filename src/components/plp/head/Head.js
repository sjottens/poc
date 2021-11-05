import QuickFilter from "./QuickFilter";
import { Link } from 'react-router-dom';

const PlpHead = () => {
	return (
		<section className="plp-head">
            <div className="padded-wrapper">
                <div className="plp-head_left">
                    <Link to="#">Back to Electronics</Link>
                    <h2>Laptops</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut molestie massa. Vivamus eget gravida leo. Ut et aliquam orci. Integer dignissim consectetur interdum.</p>
                </div>
                <QuickFilter/>
            </div>
        </section>
	);
}

export default PlpHead; 