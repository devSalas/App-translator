import BtnSmall from "./BtnSmall";
import {useState,useEffect} from "react"
import styled from "./TraduceAhora.module.css"
import FetchTranslate from "../services/useFetch";
const TraduceAhora = () => {

  const [word, setWord] = useState("");
  const [send,setSend]= useState(false)
  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");
  

  useEffect(() => {
    if(send){
      console.log("se envio")
       FetchTranslate(word.trim())
      .then(res=>{
        res.ok ?setResultado(res.data):setError(res)
        console.log(res)
        setSend(false)
      }
      ) 
      }
    
  }, [send]);

  
  const handleKeyDown = (e)=>{
    console.log(e)
    if(e.key ==="Enter"){
      setSend(true)
      setResultado("")
    }

  }
  const handleChange = (e)=>{
    console.log(e.target.value)
    setWord(e.target.value)

  }


  return (  
    <div className={styled.container}>

      <div>
        <a href="">Quari Translate</a>
        <img src="" alt="" />
      </div>

      <h2 className={styled.h2}>Quick translation</h2>

      <div className={styled.contentToTraslate}>

        <select name="" id="" className={styled.select}>
          <option value="a" >Spanish</option>
          <option value="a">English</option>
        </select>

        <div className={styled.description}>

         <textarea  onKeyDown={handleKeyDown} className={styled.textarea} onChange={handleChange} value={word}>

         </textarea>

        </div>
      </div>

      <h4 className={styled.h4}>Translate to</h4>

      <div className={styled.contentToTraslate}>

        <select  name="" id="" className={styled.select}>
          <option value="spanish" >Spanish</option>
          <option value="" >English</option>
        </select>

        <div className={styled.description}>

          <div className={styled.textTraducido} >
          { resultado || "" }
          </div>

        </div>

      </div>

      <div>
        <BtnSmall conversacion/>
        <BtnSmall microfono/>
        <BtnSmall camara/>
      </div>
      
    </div>
   );
}
 
export default TraduceAhora;