import React from 'react'
import Product from './Product'

const products = ({ product }) => {
	return (
		<div>
			{product.map((product, index) => <Product product={product} key={index} />)}
		</div>
	)
}

products.propTypes = {

}

export default products
