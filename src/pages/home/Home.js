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
        newChildren.push(<AddDetailForm  key={i} relation={'children-'+ (i+1)}/>)
      }
      setArrayChildren(newChildren);
    }
   },[GlobalSetting.hasChildren])

   return(
       <Layout>
           <AddDetailForm relation={'main'} />
           {
              GlobalSetting.isMarried&&(
                    <AddDetailForm relation={'wife'} />
                )
           }
           {
              arrayChildren
           }
       </Layout>
   )
}