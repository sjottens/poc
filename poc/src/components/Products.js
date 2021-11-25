import React from 'react'
import Product from './Product'

const products = ( props ) => {
	console.log(props)
	return (
		<div>
			{props.products && props.products.map(
				(product, index) =>{
					return <Product product={product} key={index} />
				}
			)}
		</div>
	)
}

export default products
