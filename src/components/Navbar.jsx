import React from "react";
import Nav from '../assets/nav1.png';
import navImg from '../assets/nav2.png';
import navImgg from '../assets/nav3.png';
import {  Button, Layout, Menu} from 'antd';
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate()
    return(
        <div>
            <Layout>
    {/* <Menu theme="yellow" mode="horizontal" defaultSelectedKeys={['1']} className="home" style={{padding:'-20px'}}> */}
        <Menu theme="yellow" className="home" >
        <div className="men">
        <Menu.Item key="1" className="imgg"><img src={Nav} width='40px' /></Menu.Item> 
        <Menu.Item key="2">STAR SHOPPER</Menu.Item>
        </div>
        <div className="men">
        <Menu.Item key="3"><img src={navImg} width='40px' /></Menu.Item> 
        <Menu.Item key="4"><img src={navImgg} width='40px'/></Menu.Item>
        <Menu.Item key="5"><Button onClick={()=>navigate('/')}>Logout</Button></Menu.Item>
        </div>
    </Menu>
</Layout>
        </div>
    )
}