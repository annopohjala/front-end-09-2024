import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
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
    </div>
  )
}

export default Menu