import React from 'react';
import styled from 'styled-components';
import PaySelector from './PaySelector';

const MainWrapper = styled.div.attrs({
    className: 'main-wrapper'
})`
    width:100%;
    height: 70vh;
    overflow-y:scroll;
`;

const Main = styled.div.attrs({
    className: 'main'
})`
    display:flex;
    flex-wrap:wrap;
    align-content: space-between;
    width:calc(100% - 47.5vw);    
    margin-left: auto;
    margin-right: auto;
    padding-right:15px;
    padding-left:15px;
    padding-top:5vh;
    padding-bottom:5vh;
    height: 95vh;
    @media (max-width: 575.98px) {
        width: 100%;
    }
`;

const ButtonGroup = styled.div`
    margin-left: auto;
    margin-top: 2vh;
    > button {
        border-radius:4px;
        width:92px;
        height:30px;
        font-size:15px;
        font-weight: bold;
    };

    > button:nth-child(1) {
        background:#FFFFFF;
        margin-right:3vw;
        border:1px solid #DCDFE6;
    }

    > button:nth-child(2) {
        color:#FFFFFF;
        background:#4BC9C9;
        margin-right:3vw;
        border:none;
        &:focus {
            outline: none;
        }
    }
    /* 避免MainWrapper與Main之間height的vh落差，使手機版按鈕可能被切掉，固定留白25px */
    @media (max-width: 575.98px) {
        margin-bottom: 25px;
    }
`;

const MainContent = ({ currentStep }) => {
    return (
        <MainWrapper>
            <Main>
                {
                    currentStep === 2 ?
                        <PaySelector paymentSelect={1} /> : null
                }

                <ButtonGroup>
                    <button>上一步</button>
                    <button>下一步</button>
                </ButtonGroup>
            </Main>
        </MainWrapper>
    )
}


export default MainContent;