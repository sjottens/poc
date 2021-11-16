import React from 'react'

const Product = ( props ) => {
	console.log(props)
	const {name, description, images, featureImages, policy, price, usp} = props.product.fields
	return (
		<div className="productTile">
			<h2 className="title">{name}</h2>
			{images && <img className='productImage' src={images[0].fields.file.url} alt={name} title={name} />}
			{featureImages && <img className='featureImage' src={featureImages[0].fields.file.url} alt={name} title={name} />}
			{description && <div>{description}<br /><br /></div>}
			{policy && <div>{policy}<br /><br /></div>}
			{price && <div>{price}<br /><br /></div>}
			{usp && <div>{usp}<br /><br /></div>}
		</div>
	)
}

export default Product
