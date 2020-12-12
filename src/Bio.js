import React from 'react';

function Bio(props) {
  const cl = <hr style={{color: props.color, backgroundColor: props.color, height: 1}}/>;
  const description = <p className="bio">{props.description}</p>;
  const list = <p className="bio">Skills include: {props.list}</p>;
  return (
  	[cl, description, list]
  	);
}
export default Bio;