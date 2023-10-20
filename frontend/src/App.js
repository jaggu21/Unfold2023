import "./App.css";

import Home from "./Pages/Home";
import TeamSelect from "./Pages/TeamSelect";
import MatchList from "./Pages/MatchList";

import { StateProvider, useStateValue } from "./StateProvider";

function App() {
	return (
		<div className="App">
			{/* <MatchList/> */}
			<Home/>
		</div>
	);
}

export default App;
