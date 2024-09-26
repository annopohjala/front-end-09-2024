// import logo from './logo.svg';
// import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import Kinkekaart from './pages/Kinkekaart';
import Seaded from './pages/Seaded';
import LisaToode from './pages/LisaToode';
import Esindused from './pages/Esindused';
import Menu from './components/Menu';


//kahte tüüpi errorid:
// 1.runtime error
// leht läheb üleni valgeks
// viga leiab: parem klõps inspect console


// 2. compile-time error
// on näha k akonsoolis(npm start juures)
// punane joon all + tekst mis on viga

function App() {
  return (
    <div className="App">
      <Menu/>
      <Menu/>
      <Menu/>
      

      


<Routes>
        <Route path="/" element={ <Avaleht/> } />
        <Route path="/ostukorv" element={ <Ostukorv /> } />
        <Route path="/osta-kinkekaart" element={ <Kinkekaart /> } />
        <Route path="/seaded" element={ <Seaded /> } />
        <Route path="/lisa-toode" element={ <LisaToode /> } />
        <Route path="/esindused" element={ <Esindused /> } />
        <Route path="*" element={ <div>404</div>} />
      </Routes>
    
    </div>
  );
}

export default App;
