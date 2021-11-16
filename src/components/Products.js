import React from 'react'
import Product from './Product'

const products = ({ product }) => {
	console.log(product)
	return (
		<div>
			{product && <h2>harry</h2>}
		</div>
	)
}

products.propTypes = {

}

export default products
