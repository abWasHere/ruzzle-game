import React, { useContext, useState } from "react";
import { WordsContext } from "./../contexts/wordsContext";

const _WordsInput = () => {
	const { setText } = useContext(WordsContext);

	const [input, setInput] = useState("");

	const handleChange = (evt) => {
		setInput(evt.target.value);
	};
	const handleSubmit = () => {
		setText(input);
	};

	return (
		<form className="WordsInput" onSubmit={handleSubmit}>
			<input type="text" name="words" id="words" onChange={handleChange} />
			<button type="submit" className="btn btn-light">
				Ajouter
			</button>
		</form>
	);
};

export default _WordsInput;
