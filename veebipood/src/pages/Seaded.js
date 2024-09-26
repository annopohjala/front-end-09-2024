import React, {useState} from 'react'

function Seaded() {

  const [keel, setKeel] = useState("est");

  return (
    <div>
    <div>Hetkel aktiivne keel: {keel} </div>
      <button onClick={() => setKeel("est")}>Eesti</button>
      <button onClick={() => setKeel("eng")}>English</button>
      <button onClick={() => setKeel("rus")}>Russkii</button>

      { keel ==="est" && <div>Leht on Eestikeelne</div>}
      { keel ==="eng" && <div>LLeht on Inglisekeelne</div>}
      { keel ==="rus" && <div>Stranitsa na Russkom jasõke</div>}
    
    </div>
  )
}

export default Seaded