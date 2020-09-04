import ListUsers from './components/ListUsers';
import Chat from './components/Chat';
import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
     <Provider store={store}>
       <div className='container'>
        <ListUsers/>
        <Chat/>
       </div>
     </Provider>
    </div>
  );
}

export default App;
