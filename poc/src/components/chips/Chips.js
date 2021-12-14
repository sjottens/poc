import Chip from "./Chip";
import '../../scss/chips.scss'

const Chips = (props) => {
	return (
        <ul>
            {props.chips.map((chip, key) =>{
                return(
                    <Chip key={key} name={chip.name} iconSrc={chip.iconSrc} color={chip.color} selected={chip.selected}/>
                )
			})}
		</ul>
	);
}

export default Chips;