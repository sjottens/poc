import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Product = ( props ) => {
	// console.log(props)
	const {name, description, images, policy, price, usp} = props.product.fields

	return (
		<div className="productTile">
			<Link to={`/productdetail/${name.replaceAll(/\s/g,'')}`}>
			<div className="product-image">
				{images && <img src={images[0].fields.file.url} alt={name} title={name} />}
			</div>
			<div className="product-content">
				{name && <h2 className="title">{name}</h2>}
				<div class="tags">
					<span class="background-dark--text pr-2">
						•&nbsp;Acer
					</span>
					<span class="background-dark--text pr-2">
						•&nbsp;15 inch
					</span>
				</div>
				{description && <p className="description">{description}</p>}
			</div>
			<div className="product-price">
				{price && <p className="price">€ {price}</p>}
			</div>
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
