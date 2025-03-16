import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Info.css'
function InfoPage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/main');
    };
    return (
        <>
            <h1>Добро пожаловать на страницу, где будет выводится РАЗНАЯ информация в зависимости от контекста!</h1>
            <button onClick={handleClick}>Назад</button>
        </>
    );
}

export default InfoPage;
