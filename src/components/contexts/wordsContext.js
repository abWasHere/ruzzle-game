import React, { createContext, useState, useEffect } from "react";
import wordsAlpha from "./../data/words";

export const WordsContext = createContext();

const WordsContextProvider = (props) => {
	const [text, setText] = useState("");
	const [foundWords, setFoundWords] = useState([]);

	useEffect(() => {
		if (wordsAlpha.find(text)) {
			setFoundWords([...foundWords, text]);
		}
	}, [text]);

	/* --- Context Provider --- */
	return (
		<WordsContext.Provider
			value={{
				setText,
				foundWords,
			}}
		>
			{props.children}
		</WordsContext.Provider>
	);
};

export default WordsContextProvider;
