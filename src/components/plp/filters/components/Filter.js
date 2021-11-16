const Filter = (props) => {

	let selectedCheck = (value)=>{
		let selected = false;
			props.activeFilters.map(filter=>{
				if((filter.filterName === props.filter.filterName) && (filter.value === value)){
					selected = true
				}
			})
		if(selected){
			return "active"
		}
	}

	if(props.filter.type === "checkbox"){
		return (
			<>
				<p>Radio</p>
			</>
		);
	}else if(props.filter.type === "radio"){
		return (
			<div className="plp-filters">
				<h3>Subcategories</h3>
				<ul className="plp-filterList">
					{props.filter.values.map((value, key) =>{
						return <li key={key} onClick={(e)=>{if(selectedCheck(value)==='active'){props.handleRemove(value, props.filter.filterName);}else{props.handleAdd(value, props.filter.filterName, props.filter.type);}}} className={"navigationItem "+selectedCheck(value) }>{value}<img className="icon-close" src="img/icons/close.svg" alt="close" /></li>
					})}
				</ul>
			</div>
		);
	}else if(props.filter.type === "range"){
		return (
			<>
				<p>Filter</p>
			</>
		);
	}else{
		return <p>loading...</p>
	}
}

export default Filter; 