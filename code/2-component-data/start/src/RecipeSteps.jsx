import React from 'react';

function RecipeSteps(props) {
	const stepsList = props.steps.map((step, index) => {
		return <li key={index}>{step.name}</li>;
	});

	return <ol>{stepsList}</ol>;
}

export default RecipeSteps;
