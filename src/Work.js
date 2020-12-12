import React from 'react';

function Work(props) {
	const company = <h5>{props.name} {props.location}</h5>;
	const dept = <h6>{props.dept}</h6>;
	const role = <h6>{props.role} {props.year}</h6>;
	const duties = <p>{props.duties}</p>
	return(
			[company, dept, role, duties]
		)
}

export default Work;