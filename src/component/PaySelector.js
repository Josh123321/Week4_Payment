import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as IcCheck } from '../style/images/icon_confirm_normal.svg';
import { ReactComponent as IcCheckConfirm } from '../style/images/icon_confirm.svg';
import { ReactComponent as IcStore } from '../style/images/icon_store.svg';
import { ReactComponent as IcLinePay } from '../style/images/line_pay.svg';
import { ReactComponent as IcAtm } from '../style/images/icon_atm.svg';
import { ReactComponent as IcCard } from '../style/images/icon_card.svg';
import UnionPay from '../style/images/unionpay.png';

const PaymentBoxWrapper = styled.div.attrs({ className: 'col-md-6 col-12' })`    
    font-size:15px;
    display:flex;
    align-content:center;
    justify-content:center;
    @media (max-width:575.98px) {
        margin-bottom:12px;
    }
`;

const PaymentBox = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    border:${props => props.selected ? '1px solid #4BC9C9' : '1px solid #DCDFE6'};
    width: 350px;
    height: 135px;
    padding: 5px 15px;
    > svg:nth-child(1) {
        position:relative;
        left:5px;
    }
`;

const PaymentDescription = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    font-size:15px;
    max-width:165px;
    > div:nth-child(2) {
        color:#909399
    }
`;

const PayIconFactory = ({ iconId }) => {
    return (
        <>
            {
                iconId === 1 ? <IcStore /> : iconId === 2 ? <IcCard /> : iconId === 3 ?
                    <IcLinePay /> : iconId === 4 ? <IcAtm /> : <img src={UnionPay} style={{width: '5vw'}} />
            }
        </>
    )
}

const RuleSection = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.25vw;
    padding-top: 1vh;
    font-size:12px;
    > p {
        margin-bottom:0.5px;
    }
`;

const Check = ({selected}) => {
    return(
        <>
        {
            selected ? <IcCheckConfirm /> : <IcCheck/>
        }
        </>
    )
}

const Highlight = styled.span`
    color:#4BC9C9;
`;
    



const paymentWay = [
    { iconNum: 1, payDes1: '超商取貨 付款', payDes2: '24隔日取貨說明' },
    { iconNum: 2, payDes1: '信用卡 付款', payDes2: 'VISA, Master, JCB, 聯合信用卡' },
    { iconNum: 3, payDes1: 'LINE Pay 付款', payDes2: '使用line point折抵消費' },
    { iconNum: 4, payDes1: '銀聯卡 付款', payDes2: '支付成功頁面僅為銀聯卡回覆訊息，交易是否完成請需以本商店通知為準' },
    { iconNum: 5, payDes1: 'Web ATM 付款', payDes2: '網路銀行ATM操作說明' },
]

const PaySelector = ({ paymentSelect }) => {
    return (
        <>
            {
                paymentWay.map((item, index) => {
                    const { iconNum, payDes1, payDes2 } = item;
                    const isSelected = paymentSelect === item.iconNum;
                    return (
                        <PaymentBoxWrapper key={index}>
                            <PaymentBox selected={isSelected}>
                                <Check selected={isSelected} />
                                <PayIconFactory iconId={iconNum} />
                                <PaymentDescription>
                                    <div>{payDes1}</div>
                                    <div>{payDes2}</div>
                                </PaymentDescription>
                            </PaymentBox>
                        </PaymentBoxWrapper>
                    )
                })
            }
            <RuleSection>
                <p>・請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。 </p>
                <p>・使用ATM轉帳，將依據銀行入帳日，依序進行出貨/排貨。 </p>
                <p>・每筆訂單所提供的「ATM專屬虛擬帳號」皆不同，若您欲使用本項服務，敬請放心進行匯款作業，安全又便利！ </p>
                <p>・若訂單內含預購、無庫存商品調貨時間請參考「商品平均調貨時間」。 ・若您對取貨或付款的方式有疑問，請詳閱<Highlight>「購買說明」</Highlight>。 </p>
                <p>・請確認您已詳閱並瞭解本站<Highlight>「購買說明」</Highlight>內容，訂單完成即表示您已同意其中的各項說明。</p>
            </RuleSection>
        </>
    )
}

export default PaySelector;