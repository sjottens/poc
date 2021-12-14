import React from 'react'
import Product from './Product'
import {FaTh, FaThList} from 'react-icons/fa'

const products = ( props ) => {
	console.log(props)
	return (
		<div>
			<div className="product-list-header">
				<div>
					<p className="product-count"> <span>{props.products.length}</span> products found</p>
				</div>
				<div>
					<FaTh className="icon-grid"></FaTh>
					<FaThList className="icon-list"></FaThList>
				</div>
			</div>
			<div>
				{props.products && props.products.map(
					(product, index) =>{
						return <Product product={product} key={index} />
					}
				)}
			</div>
		</div>
	)
}

export default products
