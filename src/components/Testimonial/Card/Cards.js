
import React from "react";
import "./Cards.css";
import Avathar from "./Testimonial Data/Avathar";

import Lorem from "./Testimonial Data/Lorem";
import NameDesignationLocationRating from "./Testimonial Data/NameDesignationLocationRating";
import Audio from "./Testimonial Data/Audio";
import Message from "./Testimonial Data/Message";



const Cards = (props) =>
{
    return (
			<div className="profile">
				<Avathar img={props.img} rating={props.rating} />
				{/* <Rating rating={props.rating} /> */}
				<NameDesignationLocationRating
					location={props.location}
					name={props.name}
					designation={props.designation}
				/>

		

				<Message message={props.message} />
				<Audio audio={props.audio} />

				<Lorem lorem={props.lorem} />
			</div>
		);
}

export default Cards;