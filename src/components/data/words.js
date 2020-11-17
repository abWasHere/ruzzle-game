var fs = require("fs");

const data = fs
	.readFileSync("./words_alpha.txt", "utf-8")
	.replace(/[\r]+/g, "")
	.split("\n");

export default data;
