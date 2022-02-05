import React, { useContext, useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import AddDetailForm from "./AddDetailForm";
import AppContext from "../../context/AppContext";

export default function Home(){

   const GlobalSetting = useContext(AppContext);

   const [arrayChildren, setArrayChildren] = useState([])
    
   useEffect(()=>{
    if(GlobalSetting.hasChildren > 0){
      var newChildren = [];
      for(let i = 0; i < GlobalSetting.hasChildren ; i++){
        newChildren.push(<AddDetailForm  key={i} who={'children'+ i}/>)
      }
      setArrayChildren(newChildren);
    }
   },[GlobalSetting.hasChildren])

   console.log(arrayChildren);
   return(
       <Layout>
           <AddDetailForm who={'main'} />
           {
              GlobalSetting.isMarried&&(
                    <AddDetailForm who={'wife'} />
                )
           }
           {
              arrayChildren
           }
       </Layout>
   )
}