import React, { useState } from 'react'


//  useState --> is not defined|| useState import tegemata


function Kinkekaart() {
  const [summa, setSumma] = useState(20);

  return (
    <div>
        <button onClick={() => setSumma(20)}>20 EUR</button>
        <button onClick={() => setSumma(50)}>50 EUR</button>
        <button onClick={() => setSumma(100)}>100 EUR</button>
        <br /><br />

        <div>Kinkekaart {summa} EUR</div>

    </div>
  )
}

export default Kinkekaart