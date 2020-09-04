import React from 'react';
import './style.css';

import { connect } from 'react-redux';
import { selectUser } from '../../store/actions/chat';

// dispatch -> dispara as ações e é ouvida por todos os reducers
const ListUsers = ({users, dispatch}) => (
    <div className="listUsers">
        {users.map(user => (
            <div className="user" key={user.id} onClick={() => dispatch(selectUser(user))}>
                <strong>{user.name}</strong>
            </div>
        ))}
    </div>
);

export default connect(state => ({ users: state.chat.users }))(ListUsers);