import SubCategories from "./components/SubCategories";

const ProductFilters = () => {
	let subCategories = ["Chromebooks", "Ultrabooks", "Apple Macbooks", "Accessoires"]

	return (
		<section className="plp-filtercontainer">
			<SubCategories categories={subCategories}/>
        </section>
	);
}

export default ProductFilters;