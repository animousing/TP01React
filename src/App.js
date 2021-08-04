import React , {useEffect,useState} from "react";
import "./style.css";
import {u} from "./usuarios"
import ItemList from "./ItemList"

const ItemListContainer = () => {

  const [usuarios,setUsuarios] = useState([])
  
  //Este efecto se ejecuta por CADA render
  //useEffect(()=>{})

  //Este efecto se ejecuta SOLO en el primer render
  useEffect(()=>{
    
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(usuarios)
      },2000)
    })

    promise.then((usuarios)=>setUsuarios(u))
  
  },[])

  
  return (
    <div>
      Item List Container
      <ItemList usuarios={usuarios}/>
    </div>
  )
}

export default ItemListContainer
