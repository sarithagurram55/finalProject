import React from "react";
import { Carousel } from 'antd';


import img10 from '../assets/1.png'
import img11 from '../assets/4.png'
import img12 from '../assets/5.png'
import img1 from '../assets/10.png'
import img2 from '../assets/11.png'
import img3 from '../assets/12.png'
import img4 from '../assets/13.png'
import img5 from '../assets/14.png'
import img6 from '../assets/15.png'
import Navbar from '../components/Navbar'

import {  Button, Layout, Menu} from 'antd';
import { useNavigate } from "react-router-dom";


const Home = () => {

  const contentStyle = {
    // margin: 0,
    // height: "80vh",
    // // color: "black",
    // textAlign: "center",
    // background: "blue",
  };
  const CustomArrow = ({ onClick, arrow }) => (
      <button
        onClick={onClick}
        style={{
          fontSize: "20px",
          color: "red",
          // background: "black",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // justifyContent: 'space-between'
        }}
      >
        {arrow}
      </button>
  );

  const onChange = (currentSlide) => {
    console.log("Current Slide:", currentSlide);
  };
  const navigate = useNavigate();

return (
<>
{<Navbar />}

    <Carousel 
    change={onChange}
    arrows
    nextArrow={<CustomArrow arrow=">" />}
    prevArrow={<CustomArrow arrow="<" />}
    >
      {/* Slide 1 */}
        <div style={contentStyle}>
        <div className="main">
            <div style={{padding:'6rem 10rem'}}>
                <h1><em>SHOP WITH UTMOST</em></h1>
                <h1 style={{color: 'rgb(66, 66, 215)'}}><em>CONFIDENCE</em></h1>
                <p style={{margin:'15px 0',fontSize:"18px"}}>Shop from the latest trendy <br/>clothes to the best gadgets. With<br/>Star Shopper you save 10% every<br/>time you shop!</p>
                <Button type="primary" onClick={()=>navigate('/products')}>Browse Products</Button>
                <p style={{margin:'15px 0'}}>Products available from:</p>
                <div className="main">
                    <img src={img1} width='30px'/>
                    <img src={img2} width='30px'/>
                    <img src={img3} width='30px'/>
                    <img src={img4} width='30px'/>
                    <img src={img5} width='30px'/>
                    <img src={img6} width='30px'/>
                </div>
            </div>
            <div>
                <img src={img10} width='490px' height='480px'/>
            </div>
            </div>
        </div>
      {/* Slide 2 */}
      <div style={contentStyle}>
      <div className="main">
            <div style={{padding:'6rem 10rem'}}>
                <h1><em>SHOP WITH UTMOST</em></h1>
                <h1 style={{color: 'rgb(66, 66, 215)'}}><em>STYLE</em></h1>
                <p style={{margin:'15px 0',fontSize:"18px"}}>Shop from the latest trendy <br/>clothes to the best gadgets. With<br/>Star Shopper you save 10% every<br/>time you shop!</p>
                <Button type="primary" onClick={()=>navigate('/products')}>Browse Products</Button>
                <p style={{margin:'15px 0'}}>Products available from:</p>
                <div className="main">
                    <img src={img1} width='30px'/>
                    <img src={img2} width='30px'/>
                    <img src={img3} width='30px'/>
                    <img src={img4} width='30px'/>
                    <img src={img5} width='30px'/>
                    <img src={img6} width='30px'/>
                </div>
            </div>
            <div>
                <img src={img11} width='490px' height='480px'/>
            </div>
        </div>
        </div>

      {/* Slide 3 */}
      <div style={contentStyle}>
      <div className="main">
            <div style={{padding:'6rem 10rem'}}>
                <h1><em>SHOP WITH UTMOST</em></h1>
                <h1 style={{color: 'rgb(66, 66, 215)'}}><em>DISCOUNT</em></h1>
                <p style={{margin:'15px 0',fontSize:"18px"}}>Shop from the latest trendy <br/>clothes to the best gadgets. With<br/>Star Shopper you save 10% every<br/>time you shop!</p>
                <Button type="primary" onClick={()=>navigate('/products')}>Browse Products</Button>
                <p style={{margin:'15px 0'}}>Products available from:</p>
                <div className="main">
                    <img src={img1} width='30px'/>
                    <img src={img2} width='30px'/>
                    <img src={img3} width='30px'/>
                    <img src={img4} width='30px'/>
                    <img src={img5} width='30px'/>
                    <img src={img6} width='30px'/>
                </div>
            </div>
            <div>
                <img src={img12} width='490px' height='480px'/>
            </div>
        </div>
        </div>
    </Carousel>
    </>
  );
};

export default Home;

