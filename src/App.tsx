import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List';
import { Sub } from './types';

const InitialState = [
	{
		nick: 'dapelu',
		subMonths: 3,
		avatar: 'https://i.pravatar.cc/150?u=dapelu',
		description: 'I am a frontend developer',
	},
	{
		nick: 'sergio_serrano',
		subMonths: 15,
		avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
	},
];

function App() {
	const [subs, setSubs] = useState<Array<Sub>>([]);

	useEffect(() => {
		setSubs(InitialState);
	}, []);

	const handleSub = (newSub: Sub) => {
		setSubs((subs) => [...subs, newSub]);
	};

	return (
		<div className="App">
			<h1>Subscriptions</h1>
			<List subs={subs} />
			<Form onNewSub={handleSub} />
		</div>
	);
}

export default App;
