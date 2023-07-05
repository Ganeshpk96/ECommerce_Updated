import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
	{
		id: "m1",
		name: "Album 1",
		description: "Lorem ipsum dolor sit amet",
		price: 22.99,
		images: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
	},
	{
		id: "m2",
		name: "Album 2",
		description: "consectetur adipiscing elit",
		price: 16.5,
		images: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
	},
	{
		id: "m3",
		name: "Album 3",
		description: "Quisque a nibh eu dolor",
		price: 12.99,
		images: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
	},
	{
		id: "m4",
		name: "Album 4",
		description: "Donec auctor dolor",
		price: 18.99,
		images: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
	},
];

const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			className="displayflex"
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
			images={meal.images}
		/>
	));

	return (
		<section className="hideContent">
			<Card className="temper">
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
