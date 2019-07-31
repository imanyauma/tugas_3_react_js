import React from 'react';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import MenuMakanan from './Pages/MenuMakanan';
import MenuKontak from './Pages/MenuKontak';
import MenuTentangKami from './Pages/MenuTentangKami';

function App() {
  return (
    <div className="App">
      <Header />
      <MenuMakanan />
      <MenuTentangKami />
      <MenuKontak />
      <Footer />
    </div>
  );
}

export default App;
