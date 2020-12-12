import React from 'react';

function Education(props) {
	const school = <h5 className="ed school">{props.school}</h5>;
	const degree = <h6 className="ed">{props.degree}, {props.year}</h6>;
	const title = <p className="ed italic">{props.title}</p>;
	const thesis = <p className="ed thesis">{props.thesis}</p>;
	return (
		[school, degree, title, thesis]
	);
}
export default Education;