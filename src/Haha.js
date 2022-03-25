import React ,{useState}from 'react'

function Haha(){
var [name1,setname1]=useState('sasi')
var [name2,setname2]=useState('sasi')

function change1(e){

    var enthovalue=e.target.value
    setname1(enthovalue)
}

function change2(e){

    var enthovalue=e.target.value
    setname2(enthovalue)
}

    return(<>

       <input  value={name1} onChange={change1} /> 
       <input  value={name2} onChange={change2} /> 
    </>)
}

export default Haha