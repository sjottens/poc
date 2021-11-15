import React from 'react'

const Product = ({product}) => {
	console.log(product)
	const {name, description, images, featureImages, policy, price, usp} = product.fields
	return (
		<div className="productTile">
			<h2 className="title">{name}</h2>
			{images && <img className='productImage' src={images[0].fields.file.url} alt={name} title={name} />}
			<div>{featureImages && <img className='featureImage' src={featureImages[0].fields.file.url} alt={name} title={name} />}</div>
			<div>{description}</div>
			<div>{policy}</div>
			<div>{price}</div>
			<div>{usp}</div>
		</div>
	)
}

export default Product
