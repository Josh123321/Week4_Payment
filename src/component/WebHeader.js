import React from 'react';
import { ReactComponent as Logo } from '../style/images/logo.svg';

const titelStlye = { paddingTop: '15px', paddingLeft: '15px' };

const WebHeader = () => (
    <div style={titelStlye}>
        <Logo />
    </div>
)

export default WebHeader;