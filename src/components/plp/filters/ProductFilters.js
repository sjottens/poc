import ActiveFilters from "./components/ActiveFilters";
import SubCategories from "./components/SubCategories";

const ProductFilters = () => {
	let subCategories = ["Chromebooks", "Ultrabooks", "Apple Macbooks", "Accessoires"]
	let activeFilters = [{name:"used"}, {name:"test"}]

	return (
		<section className="plp-filtercontainer">
			{ subCategories &&<SubCategories categories={subCategories}/>}
			{ activeFilters &&<ActiveFilters activeFilters={activeFilters}/>}
        </section>
	);
}

export default ProductFilters;