import Steps from './components/Steps';
import './assets/css/style.css';
import './assets/css/fontawesome-free-5.14.0-web/css/all.css';
import './assets/css/animate.css';
import { useState, useEffect } from 'react';

export default function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [collectionMethod, setCollectionMethod] = useState('none');
	const [step, setStep] = useState(0);

	
	useEffect(() => {
		const data = {
			loggedIn,
			collectionMethod,
			step
		}
		const parsedData = JSON.stringify(data)
		if(loggedIn !== false) {
			localStorage.setItem("data", parsedData)
		}
		if(collectionMethod !== "none") {
			localStorage.setItem("data", parsedData)
		}
		if(step !== 0) {
			localStorage.setItem("data", parsedData)
		}	
	}, [loggedIn, collectionMethod, step])
	
	useEffect(() => {
		const data = localStorage.getItem("data")
		if (data) {
			const parsedData = JSON.parse(data)
			if(parsedData.loggedIn !== false) {
				setLoggedIn(parsedData.loggedIn)
			}
			if(parsedData.collectionMethod !== "none") {
				setCollectionMethod(parsedData.collectionMethod)
			}
			if(parsedData.step !== 0) {
				setStep(parsedData.step)
			}	
		}   
	}, [])

	return (
		<div className='container'>
			<input
				type='checkbox'
				name='user'
				onChange={(e) => setLoggedIn(e.target.checked)}
				style={{ fontSize: '2rem', padding: '1rem' }}
				checked={loggedIn}
			/>
			<label htmlFor='user' style={{ fontSize: '1rem' }}>
				User Logged In?
			</label>
			<Steps user={{ loggedIn, collectionMethod, setCollectionMethod, step, setStep }} />
		</div>
	);
}
