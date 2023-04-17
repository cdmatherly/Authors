import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Main from './views/Main';
import Update from './views/Update';
import New from './views/New';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route element={<Main />} path="/"/>
          <Route element={<Update />} path="/authors/:id"/>
          <Route element={<New />} path="/authors/new"/>
        </Routes>
    </div>
  );
}
export default App;