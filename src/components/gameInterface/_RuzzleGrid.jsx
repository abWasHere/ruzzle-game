import React from "react";

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomChars = [];
for (let i = 0; i < 16; i++) {
	randomChars.push(
		alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase()
	);
}

const _RuzzleGrid = () => {
	return (
		<div className="RuzzleGrid grid">
			{randomChars.map((char, i) => (
				<div key={i}>{char}</div>
			))}
		</div>
	);
};

export default _RuzzleGrid;
