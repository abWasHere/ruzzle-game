import React from "react";
import WordsCount from "./_WordsCount";
import WordsList from "./_WordsList";
import WordsInput from "./_WordsInput";
import RuzzleGrid from "./_RuzzleGrid";
import Timer from "./_Timer";

const GameInterface = () => {
	return (
		<div className="Interface GameInterface flex">
			<div className="container left-side flex flex-col">
				<WordsCount />
				<WordsList />
			</div>
			<div className="container right-side flex flex-col">
				<Timer />
				<RuzzleGrid />
				<WordsInput />
			</div>
		</div>
	);
};

export default GameInterface;
