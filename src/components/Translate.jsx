import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import TraduceAhora from "./TraduceAhora";
import styled from "./Translate.module.css"

const Translate = () => {
  return ( 
    <div className={styled.container}>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={<TraduceAhora/>}/>
      </Routes>
    </div>
   );
}
 
export default Translate;