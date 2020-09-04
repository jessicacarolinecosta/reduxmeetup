import React from 'react';
import './style.css';

import { connect } from 'react-redux';

const Chat = ({ currentUser }) => (
    <div className="chat">
        {currentUser.name && <strong className="chatTitle">Chat com <span className="chatUserName">{currentUser.name}</span></strong>}
        {!currentUser.name && <strong className="chatPlaceholder">Selecione um Usuário</strong>}
    </div>
)

export default connect(state => ({ currentUser: state.chat.currentUser}))(Chat);