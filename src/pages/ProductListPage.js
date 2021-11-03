import { Link } from 'react-router-dom';
import ProductFilters from '../components/plp/filters/Filters'
import PlpHead from '../components/plp/head/Head';
import ProductList from '../components/plp/productList/ProductList';
import '../css/plp.css'

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