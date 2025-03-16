import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Main/Mainpage.jsx'; // Ваши компоненты
import Rasp from './Rasp/Rasp.jsx';
import OpenPage from './Open/Open.jsx';
import Map from './Map/Map.jsx';
import InfoPage from './Info/Info.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<OpenPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/rasp" element={<Rasp />} />
            <Route path="/map" element={<Map />} />
            <Route path="/info" element={<InfoPage />} />
        </Routes>
    );
}

export default App;
