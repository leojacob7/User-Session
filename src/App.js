import React from 'react';
import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux';
import Content from './components/Content/Content';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Content />
    </div>
    </Provider>
  );
}

export default App;
