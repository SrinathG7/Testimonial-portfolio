import { Avatar } from "@material-ui/core";

import StarRatingComponent from "react-star-rating-component";

const Avathar = (props) =>
{
	var rating = props.rating;
    return (
			<div>
				<Avatar
					imgProps={{ style: { borderRadius: "50%" } }}
					src={props.img}
					style={{
						alighItem: "center",
						marginLeft: "auto",
						marginRight: "auto",
						width: "50%",
						justifyContent: "center",
						width: 120,
						height: 120,
						border: "1px solid lightgray",
						padding: 7,
						marginBottom: 20,
					}}
				/>
				<StarRatingComponent 
					starCount={5}
			
					value={rating}
					starColor={'gold'}
					emptyStarColor={'#ddd'}
				/>


				
			</div>
		);
}

export default Avathar;