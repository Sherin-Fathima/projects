import React from "react";

const Weather = props => (
	<div className="finfo">
	 {	
	 	props.city && props.country && <p className="fkey"> Location: 
	 		<span className="fvalue"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="fkey"> Temperature: 
	 		<span className="fvalue"> { props.temperature+ String.fromCharCode(176)+"C"}	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="fkey"> Humidity: 
	 		<span className="fvalue"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="fkey"> Conditions: 
	 		<span className="fvalue"> { props.description } </span>
	 </p> 
	 }
	 
	 { 
	 	props.error && <p className="ferror">{ props.error}</p>  
	 }
	</div>
);

export default Weather;