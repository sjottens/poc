import React from 'react'
import Product from './Product'

const products = ({ posts }) => {
	return (
		<div>
			{posts.map((product, index) => <Product product={product} key={index} />)}
		</div>
	)
}

products.propTypes = {

}

export default products
