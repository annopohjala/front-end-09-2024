import React, { useState } from 'react'

function Esindused() {
  const[linn, muudaLinn] = useState("Tallinn");


  return (
    <div>

      <div>Aktiivne linn on: {linn}</div>
      <button onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
      <button onClick={() => muudaLinn("Tartu")}>Tartu</button>
      <button onClick={() => muudaLinn("Narva")}>Narva</button>
      <button onClick={() => muudaLinn("Pärnu")}>Pärnu</button>


      { linn=== "Tallinn" &&
        <div>
          <div>Ülemiste</div>
          <div>Rocca al Mare</div>
          <div>Magistrali</div>
          <div>Vesse</div>
          <div>Kristiine</div>
          <div>Järveotsa</div>
        </div>
      }

      { linn=== "Tartu" &&
        <div>
          <div>Raatuse</div>
          <div>Lõunakeskus</div>
        </div>
      }

      { linn ==="Narva" && <div>Fama</div>}

      { linn ==="Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused