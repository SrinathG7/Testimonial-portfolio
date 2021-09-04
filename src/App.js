
import './App.css';
import Testimonial from './components/Testimonial/Testimonial';
import Data from "./components/Testimonial/Data/Data.json";

function App() {
  return (
		<div className="App">
			<Testimonial Items = {Data}/>
			
		</div>
  );
}

export default App;
