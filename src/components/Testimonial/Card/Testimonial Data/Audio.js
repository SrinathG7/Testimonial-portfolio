import { PinDropSharp } from "@material-ui/icons"
import ReactAudioPlayer from "react-audio-player";

const Audio = (props) =>
{
    


    return (
			<div style={{ margin: 25 }}>
				<ReactAudioPlayer src={props.audio} controls />
			</div>
		);
}

export default Audio;