import React from 'react'

const Product = ({product}) => {
	console.log(product)
	const {name, description, images, policy, price, usp} = product.fields
	return (
		<div className="post">
			<h2 className="title">{name}</h2>
			{images && <img className='productImage' src={images[0].fields.file.url} alt={name} title={name} />}
			<div>{description}</div>
			<div>{policy}</div>
			<div>{price}</div>
			<div>{usp}</div>
		</div>
	)
}

export default Product
