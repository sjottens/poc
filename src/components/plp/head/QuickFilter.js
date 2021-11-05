import Chips from '../../chips/Chips'
import { Link } from 'react-router-dom';

const QuickFilter = () => {
	let filters = ["quickFilter1", "quickFilter2", "quickFilter3", "quickFilter4", "quickFilter5"]
	let chips = [{
			name:"Highest rating",
			iconSrc:"img/icons/star.svg",
			color:"green"
		},
		{
			name:"Special offers",
			iconSrc:"img/icons/cart.svg",
			selected:true
		},
		{
			name:"Wunderful deals",
			iconSrc:"img/icons/heart.svg",
		}
	]
	return (
		<section className="quickfilter">
            <div className="quickfilter-heading"><h3>Quick Filter </h3> <Link to="#">EDIT</Link></div>
			<ul>
				{filters.map((filter, key)=>{
					return <li key={key} className="label">{filter}</li>
				})}
			</ul>
			<Chips chips={chips}/>
		</section>
	);
}

export default QuickFilter; 