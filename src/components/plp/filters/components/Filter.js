const Filter = (props) => {

	if(props.type === "radio"){
		return (
			<>
				<p>Radio</p>
			</>
		);
	}else if(props.type === "rating"){
		return (
			<>
				<p>Filter</p>
			</>
		);
	}else if(props.type === "list"){
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