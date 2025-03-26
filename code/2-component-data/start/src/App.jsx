import './index.css';
import React from 'react';
import RecipeTitle from './RecipeTitle.jsx';
import IngredientList from './IngredientList.jsx';
import RecipeSteps from './RecipeSteps.jsx';

function App() {
	const recipe = {
		title: 'Mashed potatoes',
		feedback: {
			rating: 4.8,
			reviews: 20,
		},
		ingredients: [
			{ name: '3 potatoes, cut into 1/2" pieces', prepared: false },
			{ name: '4 Tbsp butter', prepared: false },
			{ name: '1/8 cup heavy cream', prepared: false },
			{ name: 'Salt', prepared: true },
			{ name: 'Pepper', prepared: true },
		],
		steps: [
			{ name: 'Add cut potatoes to a pot of heavily salted water.' },
			{ name: 'Bring pot to a boil.' },
			{ name: 'Boil the potatoes until fork tender, about 15-20 minutes.' },
			{ name: 'Strain the potatoes.' },
			{ name: 'Return potatoes to pot.' },
			{ name: 'Add butter, cream, salt, and pepper to taste.' },
			{ name: 'Mash potatoes.' },
			{ name: 'Re-season and add butter and cream as desired.' },
		],
	};

	return (
		<article>
			<h1>Recipe Manager</h1>
			<RecipeTitle title={recipe.title} feedback={recipe.feedback} />
			<IngredientList ingredients={recipe.ingredients} />
			<RecipeSteps steps={recipe.steps} />
		</article>
	);
}

export default App;
