import React from 'react';

function Bio(props) {
  const description = <p className="bio">{props.description}</p>;
  const list = <p className="bio">Skills include: {props.list}</p>;
  return (
  	[description, list]
  	);
}
export default Bio;