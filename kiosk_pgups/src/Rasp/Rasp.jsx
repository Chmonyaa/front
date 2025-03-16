import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Rasp.css'
function Rasp() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/main');
    };
    return (
        <>
            <div className="your_css_selector"></div>
            <h1 className="classtest1">Страница Расписание</h1>
            <p className="classtest1">Здесь будет содержимое страницы расписания.</p>
            <button className="classtest1" onClick={handleClick}>Назад</button>
        </>
    );
}

export default Rasp;
