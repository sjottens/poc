import { useState } from "react";
import ActiveFilters from "./components/ActiveFilters";
import Filter from "./components/Filter";
import SubCategories from "./components/SubCategories";

const ProductFilters = () => {
	const [activeFilters, setactiveFilters] = useState([{filterName:"condition", value:"used"}])
	const [subCategories, setsubCategories] = useState(["Chromebooks", "Ultrabooks", "Apple Macbooks", "Accessoires"])
	let filters = [
		{
			filterName:"condition",
			values:["New", "used", "Renewed", "Refurbished", "Showroom sample"],
			type:"radio"
		},
		{
			filterName:"Memory",
			values:["4 GB", "6 GB", "8 GB", "16 GB & more"],
			type:"checkbox"
		}
	]

	let handleRemove = (val1, val2)=> {
		let output = activeFilters.filter((val) => val.filterName!==val2&&val.value!==val1)
		setactiveFilters(output)
	}

	let handleAdd = (val1, val2, val3)=> {
		let output = {filterName:val2, value:val1}
		if(val3==="radio"){
			let able = true
			activeFilters.map(act=>{
				if(act.filterName===val2){
					able = false
				}
			})
			if(able===true){
				setactiveFilters([...activeFilters, output])
			}
		}else{
			setactiveFilters([...activeFilters, output])
		}
	}

	return (
		<section className="plp-filtercontainer">
			{ subCategories &&<SubCategories categories={subCategories}/>}
			{ activeFilters &&<ActiveFilters activeFilters={activeFilters}/>}
			{filters.map((filter, key)=>{
				return(
					<Filter key={key} activeFilters={activeFilters} handleRemove={handleRemove} handleAdd={handleAdd}  filter={filter}/>
				)
			})}
        </section>
	);
}

export default ProductFilters;