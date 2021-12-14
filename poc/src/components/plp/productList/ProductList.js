import React from 'react'
import { client } from '../../../client';
import Products from '../../../components/Products'

class ProductList extends React.Component {
	state = {
		products: []
	}
	componentDidMount() {
		client.getEntries()
		.then((response) => {
			console.log(response)
			this.setState({
				products: response.items
			})
		})
		.catch(console.error)
	}

	render() {
		return (
			<div>
				<div className="wrapper">
					{this.state.products && <Products products={this.state.products} />}
				</div>
			</div>
		);
	}
}

export default ProductList; 