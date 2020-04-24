import React from 'react';

const Post = (props) => {
	return ( 
		<div>
			<h3>{props.title}</h3>
			<img src={props.image} />
			<sub>{props.author}</sub>
			<p>{props.body}</p>
		</div>
	);
}
 
export default Post;