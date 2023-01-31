import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import FoodUpload from './pages/FoodUpload';
import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/foodupload" element={<FoodUpload />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
