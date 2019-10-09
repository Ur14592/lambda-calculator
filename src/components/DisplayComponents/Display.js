import React, { useState } from "react";



const Display = () => {
  const [displayState] = useState(0);
	return <div className="display">{displayState}</div>;
};
export default Display;