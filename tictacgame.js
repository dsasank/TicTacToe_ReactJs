import React, { useState, useEffect } from 'react'
import "./toegame.css"
function Tictacgame() {
    const [vali,setVali]=useState(["","","","","","","","",""])
    const[whochance,setWhochance]=useState(false)
const sqcl=(index)=>{
    let strings=Array.from(vali)
    strings[index]=whochance?"x":"o"
    setVali(strings)
    setWhochance(!whochance)
}
const [winnering,setWinering]=useState(" ")
const resett=()=>{
    setVali(["","","","","","","","",""])
}
useEffect(() => {
    let winner = checkWinner();
    if (winner) {
        setVali(["","","","","","","","",""]);
        setWinering(winner +" won the game")
        alert(`Ta da ! ${winner} won the Game !`)
    }
}, [vali])
const checkWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    //console.log('Class: App, Function: checkWinner ==', vali[0], vali[1], vali[2]);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (vali[a] && vali[a] === vali[b] && vali[a] === vali[c]) {
            return vali[a];
        }
    }
    return null;
}
  return (
    <>
    <h1 style={{color:"red"}}>{winnering}  </h1>
        <div className="game-board">
  <div className="box" onClick={()=>sqcl(0)} >{vali[0]}</div>
  <div className="box" onClick={()=>sqcl(1)} >{vali[1]}</div>
  <div className="box" onClick={()=>sqcl(2)} >{vali[2]}</div>
  <div className="box" onClick={()=>sqcl(3)} >{vali[3]}</div>
  <div className="box" onClick={()=>sqcl(4)} >{vali[4]}</div>
  <div className="box" onClick={()=>sqcl(5)} >{vali[5]}</div>
  <div className="box" onClick={()=>sqcl(6)} >{vali[6]}</div>
  <div className="box" onClick={()=>sqcl(7)} >{vali[7]}</div>
  <div className="box" onClick={()=>sqcl(8)} >{vali[8]}</div>
  
</div>
<button className='btn btn-danger' style={{textAlign:'center'}} onClick={resett}>Reset</button>

    </>
  )
}
export default Tictacgame