import React from 'react';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import MenuUtama from './Pages/MenuUtama';
import Makanan from './Pages/Makanan';
import MenuKontak from './Pages/MenuKontak';
import MenuTentangKami from './Pages/MenuTentangKami';

function App() {
  return (
    <div className="App">
      <Header />
      <MenuUtama />
      <Makanan />
      <MenuTentangKami />
      <MenuKontak />
      <Footer />
    </div>
  );
}

export default App;
