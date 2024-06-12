import React from 'react';
import NavbarHome from './components/navbar/navbar';
import Footer from './components/layout/footer/footer';

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavbarHome />
      <div style={{ flex: 1,backgroundColor: '#ffe6d0',}}>
        {/* Content goes here */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
