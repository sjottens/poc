import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Product = ( props ) => {
	console.log(props)
	const {name, description, images, policy, price, usp} = props.product.fields

	return (
		<div className="productTile">
			<Link to={`/productdetail/${name}`}>
				{name && <h2 className="title">{name}</h2>}
				{images && <img className='productImage' src={images[0].fields.file.url} alt={name} title={name} />}
				{description && <div>{description}<br /><br /></div>}
				{policy && <div>{policy}<br /><br /></div>}
				{price && <div>{price}<br /><br /></div>}
				{usp && <div>{usp}<br /><br /></div>}
			</Link>
		</div>
	)
}

Product.propTypes = {
	props:PropTypes.shape({
		name:PropTypes.string.isRequired,
		description:PropTypes.string.isRequired,
		images:PropTypes.arrayOf(PropTypes.string).isRequired,
		policy:PropTypes.string.isRequired,
		price:PropTypes.number.isRequired,
		usp:PropTypes.string.isRequired,
	})
}
export default Product
