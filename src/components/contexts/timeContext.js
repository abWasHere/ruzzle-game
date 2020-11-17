import React, { createContext, useState, useEffect } from "react";

export const TimeContext = createContext();

const TimeContextProvider = (props) => {
	const [chrono, setChrono] = useState({ time: 0, isOn: false });

	const startChrono = () => {
		setChrono({
			time: chrono.time,
			start: Date.now() - chrono.time,
			isOn: true,
		});
		let timer = setInterval(
			() =>
				setChrono({
					time: Date.now() - chrono.start,
				}),
			1
		);
	};
	//   stopChrono() {
	//     setChrono({isOn: false})
	//     clearInterval(timer)
	//   }
	//   resetChrono() {
	//     setChrono({chrono.time: 0})
	//   }

	/* --- Context Provider --- */

	return (
		<TimeContext.Provider
			value={{
				chrono,
				setChrono,
			}}
		>
			{props.children}
		</TimeContext.Provider>
	);
};

export default TimeContextProvider;
