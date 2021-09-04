import react from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from "./Card/Cards";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
	console.log(props);
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
		</div>
	);
};
const NextBtn = (props) => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
		</div>
	);
};
const Testimonial = (props) => {
	return (
		<div
			className="testimonial container d-flex justify-content-center"
			
		>
			<div
				
				style={{
					width: "70%",
					textAlign: "center",
					alignItems: "center",
					justifyContent: "center",
					
				}}
			>
				<h1 style={{ marginBottom: 40 }}>TESTIMONIALS</h1>
				<Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
					{props.Items.map((profile) => (
						<Cards
							key={profile.id}
							name={profile.name}
							location={profile.location}
							designation={profile.designation}
							message={profile.message}
							lorem={profile.lorem}
							rating={profile.rating}
							audio={profile.audio}
							img={profile.avatar}
						/>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Testimonial;