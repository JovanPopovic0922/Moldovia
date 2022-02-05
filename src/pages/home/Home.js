import React, { useContext, useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import AddDetailForm from "./AddDetailForm";
import AppContext from "../../context/AppContext";

export default function Home(){

   const GlobalSetting = useContext(AppContext);

   const [arrayChildren, setArrayChildren] = useState([])
    
   useEffect(()=>{
    if(GlobalSetting.hasChildren>0){
      for(let i = 0; i < GlobalSetting.hasChildren; i++){
        arrayChildren.push(<AddDetailForm />);
        setArrayChildren ([...arrayChildren, <AddDetailForm  key={i}/>]);
      }
    }
   },[GlobalSetting.hasChildren])

   return(
       <Layout>
           <AddDetailForm />
           {
                GlobalSetting.isMarried&&(
                    <AddDetailForm />
                )
           }
           {
              arrayChildren
           }
       </Layout>
   )
}