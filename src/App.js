import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import ListContainer from "./components/ListContainer";

const App = () => {
	return (
		<Router>
			<div className="App">
				<ListContainer />
			</div>
		</Router>
	);
};

export default App;
