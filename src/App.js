import React from 'react';
import { isMobile } from 'react-device-detect';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

function App() {
  return (
    <div className="App">
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
}

export default App;
