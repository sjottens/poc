import ProductFilters from '../components/plp/filters/ProductFilters'
import PlpHead from '../components/plp/head/Head';
import ProductList from '../components/plp/productList/ProductList';
import '../scss/plp.scss'

const ProductListPage = () => {
	return (
		<>
            <PlpHead/>
            <main className="plp-container">
                <div className="padded-wrapper">
                    <ProductFilters/>
                    <ProductList/>
                </div>
            </main>
		</>
	);
}

export default ProductListPage; 