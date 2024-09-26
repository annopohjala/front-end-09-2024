// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Link to= "">
      <img className="pilt" src="https://p.ohtuleht.ee/40/i/2019/5/6/nshi2psc.vgz.jpg" alt="Nobe auto" />
      </Link>
      
      <Link to="ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>
      <Link to="osta-kinkekaart">
        <button className="nupp">Kinkekaardid</button>
      </Link>
      <Link to="seaded">
        <button className="nupp">Seaded</button>
      </Link>
      <Link to="lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>
      <Link to="esindused">
        <button className="nupp">Esindused</button>
      </Link>
      {/* <Link to="">
        <button className="nupp">Nupp</button>
      </Link> */}


      <Routes>
        <Route path="" element={<div>Olen avalehel</div>} />
        <Route path="ostukorv" element={<div>Ostukorv</div>} />
        <Route path="osta-kinkekaart" element={<div>Kinkekaardid</div>} />
        <Route path="seaded" element={<div>Seaded</div>} />
        <Route path="lisa-toode" element={<div>Lisa toode</div>} />
        <Route path="esindused" element={<div>Esindused</div>} />
      </Routes>
    
    </div>
  );
}

export default App;
