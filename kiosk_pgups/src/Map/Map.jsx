import { useNavigate } from 'react-router-dom';
import './Map.css';
import '../menu.css';
import MapSVG from "./2 этаж.svg";

import RealTimeClock from '../RealTimeClock.jsx';
import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Map() {
    const navigate = useNavigate();

    const handleClick1 = () => navigate('/main');
    const handleClick2 = () => navigate('/rasp');
    const handleClick3 = () => navigate('/info');
    const [selectedRoom, setSelectedRoom] = useState(null);
    const fixedRooms = [
        { id: 1, x: 1320, y: 778, label: "1-217", width: 69, height: 42 },
        { id: 2, x: 1390, y: 843, label: "1-216", width: 85, height: 47},
    ];
    const handleRoomClick = (id) => {
        setSelectedRoom(id === selectedRoom ? null : id);
    };
    return (
        <>
            <div className="your_css"></div>
            <div className="frame">
                <RealTimeClock />
                <div className="menu">
                    <button className="menubutton" onClick={handleClick1}>Новости</button>
                    <button className="menubutton" onClick={handleClick2}>Расписание</button>
                    <button className="selectButton">Карта</button>
                    <button className="menubutton" onClick={handleClick3}>Инфо</button>
                </div>
                <div className="toggle-container">
                    <p>A</p>
                    <button className="toggle-button">文</button>
                </div>
                <div className="search-container">
                    <input type="text" id="search" placeholder="Поиск..." />
                    <div className="divider"></div>
                    <button className="Search" onClick={() => console.log("Поиск")}></button>
                </div>
            </div>

            <div className="w-full h-screen border">
                <TransformWrapper
                    minScale={0.5}
                    maxScale={4}
                    centerOnInit
                    wheel={{ step: 0.1 }}
                    doubleClick={{ disabled: false }}
                >
                    {({ zoomIn, zoomOut, resetTransform }) => (
                        <>
                            <div className="controls">
                                <button onClick={() => zoomIn()}>+</button>
                                <button onClick={() => zoomOut()}>-</button>
                                <button onClick={() => resetTransform()}>Reset</button>
                            </div>
                            <TransformComponent>
                                <svg width="100vw" height="100vh">
                                    <image href={MapSVG} width="100%" height="100%" style={{ zIndex: 2, position: "absolute" }} />
                                    {fixedRooms.map((room) => (
                                        <g key={room.id} style={{ zIndex: 1, position: "relative" }}>
                                            <rect
                                                x={room.x}
                                                y={room.y}
                                                width={room.width}
                                                height={room.height}
                                                fill={selectedRoom === room.id ? "rgba(84,211,120,0.7)" : "rgba(109,246,141,0.3)"}
                                                stroke="black"
                                                onClick={() => handleRoomClick(room.id)}
                                            />
                                            <text
                                                x={room.x + 10}
                                                y={room.y + 20}
                                                fontSize="12"
                                                fill="black"
                                            >
                                                {room.label}
                                            </text>
                                        </g>
                                    ))}
                                </svg>
                            </TransformComponent>
                        </>
                    )}
                </TransformWrapper>
            </div>
        </>
    );
}

export default Map;
