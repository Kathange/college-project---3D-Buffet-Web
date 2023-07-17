import './App.css';
import React from "react";
import { Link } from 'react-router-dom';

const home = () => {
    return (
        <div className="App">
            {/* 標題 */}
            <h1 className="Buf-header">3D 智助餐</h1>

            {/* 決定要進入買家還是賣家的頁面 */}
            <p className='p'>歡迎使用本網站，本網站將即時提供您夾取菜色後的價錢、熱量等供您參考</p>
            <p className='BorS'>請問您是：</p>
            <div>
                <Link to="/buyer">
                    <button className="button">買家</button>
                </Link>
                <Link to="/seller">
                    <button className="button">賣家</button>
                </Link>
            </div>
        </div>
    );
}

export default home;
