import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import SalonPage from './pages/SalonPage';
import RecordPage from './pages/RecordPage';

const App = (): JSX.Element => {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainPage/>}/>
				<Route path='/salon/:id' element={<SalonPage/>}/>
				<Route path='/record/:id' element={<RecordPage/>}/>
			</Routes>
		</>
	);
};

export default App;