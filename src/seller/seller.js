import React from "react";
import '../App.css';

function Seller() {
  return (
    <div className="App">
      {/* 標題 */}
      <h1 className="Buf-header">3D 智助餐</h1>

      {/* 選擇日期得知當日菜色的銷量(重量由低到高排名) */}
      <p>請選擇日期：</p>
      <input type="date" />
      <button className="button">生成</button>
      <table id="rank"></table>
    </div>
  );
}

export default Seller;
