import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Map.css'
function Map() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/main');
    };
    return (
        <>
            <h1>Добро пожаловать на страницу карты!</h1>
            <button onClick={handleClick}>Назад</button>
        </>
    );
}
export default Map;
