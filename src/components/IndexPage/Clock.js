import React, { useEffect, useState } from "react";

const Clock = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	useEffect(() => {
		let interval = setInterval(tick, 1000);
		return () => clearInterval(interval);
	});
	const tick = () => setTime(new Date().toLocaleTimeString());
	return <>{time}</>;
};

export default Clock;
