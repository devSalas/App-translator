import { Route, Router, Routes } from "react-router-dom";
import TraduceAhora from "./TraduceAhora";


const Translate = () => {
  return ( 
    <div>
      <Routes>
        <Route path="/" element={<TraduceAhora/>}/>
      </Routes>
    </div>
   );
}
 
export default Translate;