
const NameDesignationLocationRating = (props) => {
	return (
		<div style={{ fontStyle: "italic", marginTop: 25 }}>
			<span style={{ fontWeight: 500, color: "green" }}>{props.name}</span>,{" "}
			{props.designation}
			<p>{props.location}</p>
		</div>
	);
};

export default NameDesignationLocationRating;