const SubCategories = (props) => {
	return (
		<div className="plp-filters">
            <h3>Subcategories</h3>
            <ul className="plp-filterList">
                {props.categories.map((category, key) =>{
                    return <li key={key} className="navigationItem">{category}</li>
                })}
            </ul>
        </div>
	);
}

export default SubCategories;