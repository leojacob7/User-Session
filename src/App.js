import React from 'react';
import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux';
import Example from './components/Modal/Example';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Content from './components/Content/Content';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    {/* <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} /> */}
      <Content />
    </div>
    </Provider>
  );
}

export default App;
