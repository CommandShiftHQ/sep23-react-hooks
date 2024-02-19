import React, { useEffect, useState } from 'react';

const MyComponent = () => {
	const [count, setCount] = useState(0);
	const [person, setPerson] = useState({
		name: 'Hasnaat',
		location: 'Manchester',
	});

	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

	const [data, setData] = useState();

	const handleClick = () => {
		setCount((prevState) => prevState + 1);
	};

	const handleNameChange = () => {
		setPerson((prevState) => {
			return {
				...prevState,
				name: 'Dan',
			};
		});
	};

	const handleNumberChange = () => {
		setNumbers((prevState) => {
			return [...prevState, 6];
		});
	};

	useEffect(() => {
		console.log('Component is mounted');

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((json) => console.log(json));
	}, [count]);

	// useEffect(() => {
	// 	console.log(count);

	// 	return () => {
	// 		console.log('Component Unmounted');
	// 	};
	// }, [count]);

	// useEffect(() => {
	// 	console.log('Runs everytime');
	// }, [count, numbers, person]);

	// console.log('Hello World');

	return (
		<div>
			<p>Count is {count}</p>
			<button onClick={handleClick}>Increment</button>

			<p>My name is {person.name}</p>
			<p>My location is {person.location}</p>
			<button onClick={handleNameChange}>Change Name</button>

			<p>My numbers are {numbers}</p>
			<button onClick={handleNumberChange}>Add Number</button>
		</div>
	);
};

export default MyComponent;
