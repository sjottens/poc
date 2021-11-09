import Chip from "../../../chips/Chip";

const ActiveFilters = (props) => {
	return (
		<div className="plp-filters">
            <h3>Subcategories</h3>
            <ul className="plp-filterList_activeFilters">
                {props.activeFilters.map(activeFilter =>{
                    return <Chip name={activeFilter.name}/>
                })}
            </ul>
        </div>
	);
}

export default ActiveFilters;