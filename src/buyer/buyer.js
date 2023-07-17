import React from "react";
import './buyer.css';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Buyer() {
  const [url, setUrl] = React.useState();
  
  return (
      <div className="App">
        {/* 標題 */}
        <h1 className="Buf-header">3D 智助餐</h1>
        
        {/* 上傳圖片 */}
        <Container>
          <Row>
            <Col md="auto">
              <p>Buffet</p>
              <label className="wrapper" htmlFor="input">
                {url ? (
                  <img src={url} alt="" width="400" height="200" />
                ) : (
                  <div className="description">請選擇圖片</div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="input"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const objectUrl = URL.createObjectURL(file);
                      setUrl(objectUrl);
                    }
                  }}
                />
              </label>
            </Col>
            <Col xs="auto">
              <p>Food Waste</p>
              <label className="wrapper" htmlFor="input">
                {url ? (
                  <img src={url} alt="" width="400" height="200" />
                ) : (
                  <div className="description">請選擇圖片</div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="input"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const objectUrl = URL.createObjectURL(file);
                      setUrl(objectUrl);
                    }
                  }}
                />
              </label>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Buyer;
