import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as IcStepDone } from '../style/images/icon_step_done.svg';
import { ReactComponent as IcStep2 } from '../style/images/icon_step2.svg';
import { ReactComponent as IcStep3 } from '../style/images/icon_step3.svg';
import { ReactComponent as IcStep3_Active } from '../style/images/icon_step3_active.svg';
import { ReactComponent as IcArrowRight } from '../style/images/icon_arrow_right.svg';

const FlowWrapper = styled.div`
  position:relative;
  z-index:1;
  display: flex;
  justify-content:space-evenly;
  align-items:center;
  background: #F5F7FA;
  width:calc(100% - 50vw);
  margin-left: auto;
  margin-right: auto;
  font-size:15px;
  @media (max-width: 575.98px) {
    width: 100%;
    bottom:0px;
  }
`;


const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props => props.done ? '#4BC9C9' :  props.active ? '#303133' : '#909399' };
  padding: 10px 20px;
`;

const StatusIcon = ({ done, step }) => {
    return (
        <>
            {
                done ? <IcStepDone /> : step === 2 ? <IcStep2 /> : <IcStep3 />
            }
        </>
    )
}

const StepText = styled.div.attrs(props => ({
    className: props.active ? 'ml-2' : 'ml-2 d-none d-sm-block'
}))``;





const StepFlow = ({currentStep}) => {
    const isStep2Active = currentStep === 2 ? true : false;
    return (
        <FlowWrapper>
            <StepWrapper done>
                <StatusIcon done />
                <StepText>確認購物車</StepText>
                <IcArrowRight style={{marginLeft:'50px'}}/>
            </StepWrapper>

            <StepWrapper active ={isStep2Active}>
                <StatusIcon step={2} />
                <StepText active={isStep2Active}>選擇配送付款方式</StepText>
                <IcArrowRight style={{marginLeft:'50px'}}/>
            </StepWrapper>

            <StepWrapper active={!isStep2Active}>
                <StatusIcon step={3} />
                <StepText active={!isStep2Active}>確認訂購</StepText>
            </StepWrapper>
        </FlowWrapper>
    )
}

export default StepFlow;