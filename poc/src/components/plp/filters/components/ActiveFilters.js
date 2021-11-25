import Chip from "../../../chips/Chip";

const ActiveFilters = (props) => {
	return (
		<div className="plp-filters">
            <h3>Active filters</h3>
            <ul className="plp-filterList_activeFilters">
                {props.activeFilters.map((activeFilter, key) =>{
                    return <Chip key={key} selected={true} name={activeFilter.value}/>
                })}
            </ul>
        </div>
	);
}

export default ActiveFilters;