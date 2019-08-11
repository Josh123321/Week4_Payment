import React from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap';

const OrderWrapper = styled.div`
    display:flex;
    position:relative;
    top:-15px;
    justify-content:space-around;
    background: linear-gradient(270deg,#82D6D6,#8BC1EF);    
    width:100%;
    color:#ffffff;
    align-content:center;
    padding:2.8vh 0px;
    margin-bottom: -15px;
`;

const OrderTitle = styled.div`
    border-left: 2px solid #ffffff;
    padding-left: 20px;
    > h2 {
        font-weight:bold;
    }
    @media (max-width: 575.98px) {
        border-left:none;
    }
`;

const DetailInfo = styled.div`
    display:inline-flex;
    flex-wrap: wrap;
    align-items: center;
    width:40vw;
    @media (max-width: 575.98px) {
        width:40%;
    }
`;

const TotalInfo = styled.div.attrs({
    className:'col-12 col-md-6'
})`
    display:inline-flex;
    align-items:center;
    > span {
        padding-right:5px;
    }
    > h4 {
        margin-bottom:0px;
    }
`;


const Order = ({amount,shippingFee,total}) => {
    return(
        <OrderWrapper>
            <OrderTitle>
                <h2>訂單明細</h2>
                <p>(JC293016)</p>
            </OrderTitle>
            <DetailInfo>
                <Col xs={12} md={3}>商品小計{'    '}$NT{amount}</Col>
                <Col xs={12} md={3}>運費{'    '}$NT{shippingFee}</Col>
                <TotalInfo><span>總金額</span><h4>$NT{total}</h4></TotalInfo>
            </DetailInfo>
        </OrderWrapper>
    )
}

export default Order;