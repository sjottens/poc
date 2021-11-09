import Chip from '../../Chip'
import { Link } from 'react-router-dom';

const QuickFilter = () => {
	let filters = ["quickFilter1", "quickFilter2", "quickFilter3", "quickFilter4", "quickFilter5"]
	let chips = [{
			name:"Highest rating",
			iconSrc:"img/icons/star.svg"
		},
		{
			name:"Special offers",
			iconSrc:"img/icons/cart.svg"
		},
		{
			name:"Wunderful deals",
			iconSrc:"img/icons/heart.svg"
		}
	]
	return (
		<section className="quickfilter">
            <div className="quickfilter-heading"><h3>Quick Filter </h3> <Link to="#">EDIT</Link></div>
			<ul>
				{filters.map(filter=>{
					return <li className="label">{filter}</li>
				})}
			</ul>
			<ul>
				{chips.map(chip =>{
					return (
						<Chip name={chip.name} iconSrc={chip.iconSrc}/>
					)
				})}
			</ul>
		</section>
	);
}

export default QuickFilter; 