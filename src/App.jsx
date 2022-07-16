import React from "react";
import { useState } from "react";
import Netflixing from "./netflix/NetflixApp";
import FormForValid from "./validForm/formValid";

const App = () => {

  const [chosing,setChosing]=useState(1);

  const handling=()=>{

    if(chosing===1){
      setChosing(2)
    }
    if(chosing===2){
      setChosing(1)
    }
    
  }
  return (

    <>

    <button onClick={handling}>Show {chosing===1?"form":"netflix"}</button>


    {chosing===1? 
    <Netflixing/>:
    <FormForValid/>
  }

    </>

  );
};

export default App;
