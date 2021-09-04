import React from "react";

const Rating = (props) =>
{
    return (
			<div style={{ color: "gold" }}>
				<img
					src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=338&ext=jpg"
					style={{ height: 60, width: 60 }}
				/>

				{props.rating}
			</div>
		);
}

export default Rating;