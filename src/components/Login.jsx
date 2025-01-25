import React from "react";

import log from '../assets/login.png'
import sell from '../assets/seller.png'

import { Row, Col, Button} from 'antd';
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate()
    return(
        <div>
            <Row className="five">
                <Col className="one">
                <div className="ten">
                <img src={log}  />
                <Button onClick={()=>navigate('/shoperLog')} className="two">Shoppers Login</Button>
                </div>
                
                </Col>
                <Col className="two">
                <div className="ten">
                <img src={sell} />
                <Button onClick={()=>navigate('/sellerLog')} className="one">Sellers Login</Button>
                </div>
                </Col>
            </Row>
        </div>
    );
}