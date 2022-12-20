import { Link } from "react-router-dom";
import BtnBig from "./BtnBig";
import BtnSmall from "./BtnSmall";
import stlyed from "./Home.module.css"
const Home = () => {


  return ( 
    <div className={stlyed.container}>
      <h1>
        Quari Translate
      </h1>
      <div className={stlyed.containerBtn}>
        <BtnBig text={"English"} color={"Secondary"}/>
        <BtnSmall  position invertir/>
        <BtnBig text={"Spanish"}/>
      </div>
      <div>
       <h3> Comenzar a traducir</h3>
      </div>
      <div>
        <Link to={"/traducirAhora"}>
          <BtnSmall  siguiente/>
        </Link>
      </div>

    </div>

   );
}
 
export default Home;