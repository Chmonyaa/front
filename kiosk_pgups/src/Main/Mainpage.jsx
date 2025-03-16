import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mainpage.css'
function MainPage() {
    const navigate = useNavigate();
    const handleClick1 = () => {
        navigate('/rasp');
    };
    const handleClick2 = () => {
        navigate('/map');
    };
    const handleClick3 = () => {
        navigate('/');
    };
    const handleClick4 = () => {
        navigate('/info');
    };
    return (
        <>
            <h1>Добро пожаловать на главную страницу!</h1>
            <p>Здесь находится содержимое главной страницы.</p>
            <button onClick={handleClick1}>Расписание</button>
            <button onClick={handleClick2}>Карта</button>
            <button onClick={handleClick4}>Инфо</button>
            <button onClick={handleClick3}>Назад</button>

        </>
    );
}

export default MainPage;
