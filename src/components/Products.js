import React from 'react'
import Product from './Product'

const products = ( props ) => {
	console.log('product= ' + props)
	return (
		<div>
			{props.products && props.products.map(
				(product, index) =>{
					console.log(product);
					return <Product product={product} key={index} />
				}
			)}


			
		</div>
	)
}

products.propTypes = {

}

export default products
