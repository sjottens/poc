import React from 'react'
import { client } from '../client';
import Products from '../components/Products'




class ProductDetailPage extends React.Component {
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
				<h1>Product detail page</h1>
				<div className="wrapper">
					{this.state.products && <Products products={this.state.products} />}
				</div>
			</div>
		);
	}
}



export default ProductDetailPage
