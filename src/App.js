import "./styles/App.css";

import Header from "./components/Header";
import StartInterface from "./components/startInterface/StartInterface";
import GameInterface from "./components/gameInterface/GameInterface";
import EndInterface from "./components/endInterface/EndInterface";

import WordsContextProvider from "./components/contexts/wordsContext";

function App() {
	return (
		<div className="App">
			<Header />
			<WordsContextProvider>
				<StartInterface />
				<GameInterface />
				{/* <EndInterface /> */}
			</WordsContextProvider>
		</div>
	);
}

export default App;
