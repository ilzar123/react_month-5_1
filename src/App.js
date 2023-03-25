import { Route, Routes } from 'react-router';
import { BrowserRouter, NavLink } from 'react-router-dom';
import ListsPage from './pages/listsPage/ListsPage';
import ListPage from './pages/listPage/ListPage';
import './App.css';

function App() {
    

    return (
        <BrowserRouter >
            <div className="App">
                <NavLink to={'/lists'} >Lists</NavLink>
                <Routes >
                    <Route path='/lists' element={<ListsPage />} />
                    <Route path='/lists/:id' element={<ListPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
