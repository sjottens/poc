import { useState } from "react";

const Chip = (props) => {

    const [selected, setSelected] = useState(false)
	return (
		<li className={selected ?"chip selected" :"chip"} onClick={()=>{if(selected===false){setSelected(true)}else{setSelected(false)}}}>
            {props.iconSrc && <img className="chip-icon" src={props.iconSrc} alt={props.name}/>}
            <p>{props.name}</p>
            {selected===true && <img className="chip-icon close" src="img/icons/close.svg" alt="close" />}
        </li>
	);
}

export default Chip; 